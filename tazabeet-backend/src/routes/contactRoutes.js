const express = require("express");
const sendEmail = require("../utils/sendEmail");
const { createRateLimiter } = require("../middleware/securityMiddleware");

const router = express.Router();

const contactLimiter = createRateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 8,
    message: "Too many contact messages. Try again later."
});

function escapeHtml(value = "") {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function normalizeText(value = "", max = 1000) {
    return String(value || "").trim().slice(0, max);
}

router.post("/", contactLimiter, async (req, res) => {
    try {
        const name = normalizeText(req.body.name, 120);
        const email = normalizeText(req.body.email, 180).toLowerCase();
        const message = normalizeText(req.body.message, 2000);

        if (!name || !email || !message) {
            return res.status(400).json({ message: "Name, email, and message are required." });
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return res.status(400).json({ message: "Please enter a valid email address." });
        }

        const receiver = process.env.CONTACT_TO || process.env.MAIL_FROM || process.env.SMTP_USER;

        if (!receiver) {
            return res.status(500).json({ message: "Contact email is not configured." });
        }

        await sendEmail({
            to: receiver,
            replyTo: email,
            subject: `New TAZABEET contact message from ${name}`,
            text: [
                "New contact message from TAZABEET website",
                "",
                `Name: ${name}`,
                `Email: ${email}`,
                "",
                "Message:",
                message,
            ].join("\n"),
            html: `
                <h2>New contact message from TAZABEET website</h2>
                <p><strong>Name:</strong> ${escapeHtml(name)}</p>
                <p><strong>Email:</strong> ${escapeHtml(email)}</p>
                <p><strong>Message:</strong></p>
                <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
            `,
        });

        res.json({ message: "Message sent successfully." });
    } catch (err) {
        res.status(500).json({ message: err.message || "Failed to send contact message." });
    }
});

module.exports = router;
