// ─────────────────────────────────────────────────────────────
// 50-DAY CHALLENGE — MORNING BRIEF
// Albina Nyawira Muturi
// May 18 – July 6, 2026
// ─────────────────────────────────────────────────────────────

const CHALLENGE_START = new Date("2026-05-18");
const CHALLENGE_DAYS = 50;
const USER_NAME = "Albina";

// ─────────────────────────────────────────────────────────────
// MONTHLY GOALS
// Month 1: Days 1–30  (May 18 – Jun 16)
// Month 2: Days 31–50 (Jun 17 – Jul 6)
// ─────────────────────────────────────────────────────────────
const MONTHLY_GOALS = {
  1: {
    theme: "Root & Routine",
    goal: "Build non-negotiable daily habits: consistent morning meditation, gym 3x/week, 2x weekly content posts, and masterclass outline done.",
  },
  2: {
    theme: "Build & Launch",
    goal: "Turn the foundation into real output: host Soirée Event #1, publish masterclass landing page, land at least one freelance inquiry, submit Schengen visa application, and finish Germany-ready.",
  },
};

// ─────────────────────────────────────────────────────────────
// WEEKLY FOCUS — 7 weeks covering all 50 days
// Week 1: Days  1–7   | Month 1
// Week 2: Days  8–14  | Month 1
// Week 3: Days 15–21  | Month 1
// Week 4: Days 22–30  | Month 1 close-out
// Week 5: Days 31–37  | Month 2
// Week 6: Days 38–44  | Month 2
// Week 7: Days 45–50  | Month 2 finish strong
// ─────────────────────────────────────────────────────────────
const WEEKLY_FOCUS = {
  1: {
    month: 1,
    theme: "Foundation Week — Build the Floor",
    miniGoals: [
      "Meditate 4 out of 6 mornings (even 5 minutes counts)",
      "Post 2 pieces of AI content this week",
    ],
    coreGoals: [
      "Complete your morning meditation before checking your phone",
      "Track everything you eat today — no judgment, just awareness",
      "Work on or publish one piece of AI content",
      "Hit the gym OR attend a swim class",
    ],
  },
  2: {
    month: 1,
    theme: "Momentum Week — Show Up Professionally",
    miniGoals: [
      "Draft your AI Masterclass outline — topic, audience, 3 module titles",
      "Plan Soirée Event #1 — pick a date, theme, and venue",
    ],
    coreGoals: [
      "Work on your AI Masterclass outline for at least 30 minutes",
      "Cut one bad dietary habit today (sugary drinks, late night snacking)",
      "Meditate before checking your phone",
      "Post or draft this week's content piece",
    ],
  },
  3: {
    month: 1,
    theme: "Clarity Week — Who Are You Building For?",
    miniGoals: [
      "Complete 1 AI upskilling module (DeepLearning.AI or similar)",
      "Start your Schengen visa document checklist",
    ],
    coreGoals: [
      "Spend 30 minutes on your AI upskilling resource",
      "Eat protein-first at every meal today",
      "Meditate — no skipping, you are building a streak",
      "Post 1 piece of content (tip, clip, or AI insight)",
    ],
  },
  4: {
    month: 1,
    theme: "Output Week — Make Something Real",
    miniGoals: [
      "Record and post your first masterclass teaser or promo clip",
      "Reach out to 3 potential freelance leads or collaborators",
    ],
    coreGoals: [
      "Work on your masterclass teaser or promo content",
      "Send one outreach message to a potential client or collaborator",
      "Meditate — you are on a streak, protect it",
      "Protein-first meals and no processed food today",
    ],
  },
  5: {
    month: 2,
    theme: "Launch Prep — Build in Public",
    miniGoals: [
      "Draft and publish your masterclass landing page",
      "Post 3x this week — consistency is the algorithm",
    ],
    coreGoals: [
      "Work on your masterclass landing page for at least 45 minutes",
      "Post one piece of content today — no perfectionism",
      "Meditate and visualise the masterclass launch",
      "Gym + protein-first eating — your body is your brand",
    ],
  },
  6: {
    month: 2,
    theme: "Soirée & Visa Week — Handle Your Business",
    miniGoals: [
      "Host or finalise Soirée Event #1 AND book your Schengen visa appointment",
      "Send proposals to at least 2 freelance prospects",
    ],
    coreGoals: [
      "Do one Soirée or visa task today — both matter equally",
      "Send one freelance proposal or follow up on an existing one",
      "Meditate — financial anxiety eases with action, not avoidance",
      "Post content that positions you as an AI expert",
    ],
  },
  7: {
    month: 2,
    theme: "Finish Strong — Arrive as Her",
    miniGoals: [
      "Get your first masterclass student or paid sign-up",
      "Confirm Germany trip logistics — flights, accommodation, itinerary",
    ],
    coreGoals: [
      "Do something today that future Albina will be proud of",
      "DM or email 5 people personally about the masterclass",
      "Meditate — you are almost there, stay present",
      "Gym — finish this challenge stronger than you started",
    ],
  },
};

// ─────────────────────────────────────────────────────────────
// SONGS (50 unique — one per day)
// ─────────────────────────────────────────────────────────────
const SONGS = [
  { title: "Black Sheep", artist: "Metric", vibe: "For the rebel building her empire" },
  { title: "Superstar", artist: "Sheryl Crow", vibe: "Slow, confident morning energy" },
  { title: "Redbone", artist: "Childish Gambino", vibe: "Smooth and grounded — stay woke" },
  { title: "Water Me", artist: "Lizzo", vibe: "Self-love and abundance mindset" },
  { title: "Unstoppable", artist: "Sia", vibe: "Pure momentum fuel" },
  { title: "Golden", artist: "Jill Scott", vibe: "Walking in sunshine energy" },
  { title: "Alright", artist: "Kendrick Lamar", vibe: "Resilience anthem" },
  { title: "No Scrubs", artist: "TLC", vibe: "Nostalgic and fun — good mood starter" },
  { title: "Rise Up", artist: "Andra Day", vibe: "Slow and powerful — for hard mornings" },
  { title: "Bad Guy", artist: "Billie Eilish", vibe: "Playful confidence" },
  { title: "Formation", artist: "Beyoncé", vibe: "You already know" },
  { title: "Peaches", artist: "Justin Bieber ft. Daniel Caesar", vibe: "Chill and happy morning" },
  { title: "Blinding Lights", artist: "The Weeknd", vibe: "High energy, cinematic start" },
  { title: "Lose Yourself", artist: "Eminem", vibe: "For when you need to go ALL IN" },
  { title: "Here Comes the Sun", artist: "The Beatles", vibe: "Gentle and optimistic" },
  { title: "Electric Feel", artist: "MGMT", vibe: "Dreamy and energizing" },
  { title: "Brave", artist: "Sara Bareilles", vibe: "Say what you wanna say — post that content" },
  { title: "Feeling Good", artist: "Nina Simone", vibe: "Timeless morning power" },
  { title: "Boss", artist: "Fifth Harmony", vibe: "Running the room energy" },
  { title: "Numb Little Bug", artist: "Em Beihold", vibe: "Gentle and introspective — for slow days" },
  { title: "Levitating", artist: "Dua Lipa", vibe: "Light, fun, and moving" },
  { title: "River", artist: "Leon Bridges", vibe: "Soul-soothing slow morning" },
  { title: "Higher Ground", artist: "Stevie Wonder", vibe: "Funky and uplifting" },
  { title: "Savage", artist: "Megan Thee Stallion", vibe: "You are that girl. Act like it." },
  { title: "Africa", artist: "Toto", vibe: "Iconic and oddly motivating" },
  { title: "Midnight City", artist: "M83", vibe: "Cinematic — you are the main character" },
  { title: "Sinnerman", artist: "Nina Simone", vibe: "Intense and propulsive — get moving" },
  { title: "Flowers", artist: "Miley Cyrus", vibe: "Self-sufficient and thriving" },
  { title: "Good Days", artist: "SZA", vibe: "Soft, hopeful morning energy" },
  { title: "Bohemian Rhapsody", artist: "Queen", vibe: "Epic — for when you need perspective" },
  { title: "Run the World (Girls)", artist: "Beyoncé", vibe: "Straight up power" },
  { title: "Confident", artist: "Demi Lovato", vibe: "Walk into the room like you own it" },
  { title: "Don't Stop Me Now", artist: "Queen", vibe: "Pure unstoppable joy" },
  { title: "This Is Me", artist: "Keala Settle", vibe: "Own every part of who you are" },
  { title: "Better Days", artist: "Ant Clemons ft. Justin Timberlake", vibe: "Hopeful and warm" },
  { title: "Shake It Out", artist: "Florence and the Machine", vibe: "Release what is heavy, move forward" },
  { title: "Roar", artist: "Katy Perry", vibe: "Find your voice today" },
  { title: "Glorious", artist: "Macklemore ft. Skylar Grey", vibe: "Emotional and uplifting" },
  { title: "Worth It", artist: "Fifth Harmony", vibe: "You are worth every effort" },
  { title: "Titanium", artist: "David Guetta ft. Sia", vibe: "You are bulletproof today" },
  { title: "New Rules", artist: "Dua Lipa", vibe: "Setting boundaries and keeping them" },
  { title: "Hall of Fame", artist: "The Script ft. will.i.am", vibe: "You can be the greatest" },
  { title: "I Was Here", artist: "Beyoncé", vibe: "Leave your mark today" },
  { title: "Lovely Day", artist: "Bill Withers", vibe: "The ultimate feel-good morning song" },
  { title: "Viva La Vida", artist: "Coldplay", vibe: "Grand, sweeping, and motivating" },
  { title: "The Greatest", artist: "Sia ft. Kendrick Lamar", vibe: "You are built for this" },
  { title: "Juice", artist: "Lizzo", vibe: "Confidence is your best outfit" },
  { title: "Dreams", artist: "Fleetwood Mac", vibe: "Timeless and floaty" },
  { title: "Golden Hour", artist: "JVKE", vibe: "Warm and glowing — like this season of your life" },
  { title: "Golden", artist: "Jill Scott", vibe: "You made it. Walk in sunshine. 🌅" },
];

// ─────────────────────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────────────────────
function getDayAndWeek(today) {
  const diffMs = today - CHALLENGE_START;
  const dayNum = Math.max(1, Math.min(Math.floor(diffMs / (1000 * 60 * 60 * 24)) + 1, CHALLENGE_DAYS));
  let weekNum;
  if (dayNum <= 7)  weekNum = 1;
  else if (dayNum <= 14) weekNum = 2;
  else if (dayNum <= 21) weekNum = 3;
  else if (dayNum <= 30) weekNum = 4;
  else if (dayNum <= 37) weekNum = 5;
  else if (dayNum <= 44) weekNum = 6;
  else weekNum = 7;
  const monthNum = WEEKLY_FOCUS[weekNum].month;
  return { dayNum, weekNum, monthNum };
}

function isSunday(today) {
  return today.getDay() === 0;
}

// ─────────────────────────────────────────────────────────────
// CLAUDE API CALL
// ─────────────────────────────────────────────────────────────
async function callClaude(prompt) {
  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": process.env.ANTHROPIC_API_KEY,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 1000,
      messages: [{ role: "user", content: prompt }],
    }),
  });
  const data = await response.json();
  if (data.error) throw new Error(`Anthropic error: ${data.error.message}`);
  return data.content[0].text;
}

// ─────────────────────────────────────────────────────────────
// GENERATE LETTER (weekdays)
// ─────────────────────────────────────────────────────────────
async function generateLetter(dayNum, weekNum, weekData, monthData) {
  return callClaude(`You are Albina Nyawira Muturi writing a short, warm, deeply personal letter to her past self on Day ${dayNum} of her 50-day challenge.

Context about Albina:
- Senior Full-Stack Engineer in Nairobi, Kenya building her path in AI education
- Building: an AI masterclass, Dame-Techie brand (~13k followers), and Soirée events brand
- Wants to be the go-to woman in tech in Kenya
- Gym 3-4x/week, swimming lessons, daily meditation goal, working on financial security
- Boyfriend is in Germany, visiting him on July 7th — Schengen visa in progress
- Currently Week ${weekNum} of 7 | Month ${monthNum}: "${monthData.theme}"
- This week: ${weekData.theme}
- Mini-goals: "${weekData.miniGoals[0]}" and "${weekData.miniGoals[1]}"
- Monthly goal: ${monthData.goal}

Write a letter from future Albina (Day 51 version) to present-day Albina:
- Warm, personal, intimate — not corporate
- 3-4 short paragraphs
- Reference something specific to week ${weekNum} and current focus
- End with one powerful sentence of encouragement
- Tone: best friend who already made it through
- Do NOT start with "I remember"

Return ONLY the letter. No labels or headers.`);
}

// ─────────────────────────────────────────────────────────────
// GENERATE SUNDAY REFLECTION PROMPT
// ─────────────────────────────────────────────────────────────
async function generateSundayNote(dayNum, weekNum, weekData, monthData) {
  return callClaude(`You are writing a warm, gentle Sunday rest note for Albina Nyawira Muturi on Day ${dayNum} of her 50-day challenge.

Context:
- She is a Senior Full-Stack Engineer in Nairobi building an AI masterclass, Dame-Techie brand, and Soirée events
- She is on Week ${weekNum} of 7, Month theme: "${monthData.theme}"
- This week's focus was: ${weekData.theme}
- She works hard all week and Sunday is her sacred rest day

Write a short, cozy Sunday note (2-3 paragraphs) that:
- Acknowledges the week she just had with warmth
- Gently encourages her to rest, clean her space, and reset mentally
- Ends with excitement and one thing to look forward to in the week ahead: "${weekData.miniGoals[0]}"
- Tone: like a warm hug from a best friend

Return ONLY the note text. No labels or headers.`);
}

// ─────────────────────────────────────────────────────────────
// SEND EMAIL VIA RESEND
// ─────────────────────────────────────────────────────────────
async function sendEmail(subject, html, toEmail) {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: "Your Future Self <onboarding@resend.dev>",
      to: [toEmail],
      subject,
      html,
    }),
  });
  const data = await response.json();
  if (data.error) throw new Error(`Resend error: ${data.error.message}`);
  console.log("✅ Email sent! ID:", data.id);
}

// ─────────────────────────────────────────────────────────────
// BUILD SUNDAY EMAIL
// ─────────────────────────────────────────────────────────────
function buildSundayHtml({ note, song, dayNum, weekNum, monthNum, monthData, weekData, dateStr }) {
  const progress = Math.round((dayNum / CHALLENGE_DAYS) * 100);
  const noteHtml = note.split("\n\n").map(p =>
    `<p style="margin:0 0 16px 0;font-size:14px;line-height:1.85;color:#1a1a1a;font-style:italic;">${p.trim()}</p>`
  ).join("");

  const sundayChecklist = [
    "Clean and reset your space 🧹",
    "Do something that genuinely relaxes you",
    "Prep your meals or plan your week ahead",
    "Reflect: what went well this week? What will you do differently?",
  ];

  const checklistHtml = sundayChecklist.map((item, i) => `
    <tr>
      <td style="padding:12px 0;border-bottom:1px solid rgba(115,162,172,0.2);">
        <table cellpadding="0" cellspacing="0" border="0" width="100%"><tr>
          <td style="width:28px;height:28px;border:1.5px solid #73A2AC;border-radius:50%;text-align:center;vertical-align:middle;font-size:11px;color:#73A2AC;">${i + 1}</td>
          <td style="padding-left:14px;font-size:14px;color:#1a1a1a;line-height:1.6;">${item}</td>
        </tr></table>
      </td>
    </tr>`).join("");

  return `<!DOCTYPE html><html>
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f5f0eb;font-family:Georgia,'Times New Roman',serif;">
<table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f5f0eb;padding:40px 16px;">
<tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;">

  <!-- HEADER -->
  <tr><td style="background:#ffffff;border:1.5px solid #0B5D69;border-radius:16px 16px 0 0;padding:40px 48px;text-align:center;">
    <p style="margin:0 0 4px 0;font-size:10px;letter-spacing:0.28em;text-transform:uppercase;color:#0B5D69;">50-Day Challenge · Day ${dayNum}</p>
    <h1 style="margin:0 0 6px 0;font-size:32px;font-weight:400;color:#0B5D69;font-style:italic;">Sunday Reset ☀️</h1>
    <p style="margin:0;font-size:13px;color:#73A2AC;letter-spacing:0.05em;">${dateStr}</p>
    <p style="margin:10px 0 0 0;font-size:11px;color:#73A2AC;font-style:italic;">Week ${weekNum} of 7 · Month ${monthNum}: ${monthData.theme}</p>
  </td></tr>

  <!-- PROGRESS BAR -->
  <tr><td style="background:#ffffff;border-left:1.5px solid #0B5D69;border-right:1.5px solid #0B5D69;padding:16px 48px 24px;">
    <table width="100%" cellpadding="0" cellspacing="0"><tr>
      <td style="font-size:10px;color:#FBAA82;text-transform:uppercase;letter-spacing:0.1em;padding-bottom:8px;">Overall Progress</td>
      <td align="right" style="font-size:10px;color:#FBAA82;padding-bottom:8px;">${progress}% complete</td>
    </tr></table>
    <table width="100%" cellpadding="0" cellspacing="0"><tr>
      <td style="background:rgba(251,170,130,0.15);border-radius:2px;height:3px;">
        <div style="background:#FBAA82;height:3px;width:${progress}%;border-radius:2px;"></div>
      </td>
    </tr></table>
  </td></tr>

  <!-- SUNDAY NOTE -->
  <tr><td style="background:#ffffff;border:1.5px solid #FBAA82;border-top:none;padding:40px 48px;">
    <p style="margin:0 0 18px 0;font-size:10px;letter-spacing:0.25em;text-transform:uppercase;color:#FBAA82;">A note for your Sunday</p>
    <div style="border-left:2px solid #FBAA82;padding-left:20px;">${noteHtml}</div>
  </td></tr>

  <!-- SUNDAY CHECKLIST -->
  <tr><td style="background:#ffffff;border:1.5px solid #73A2AC;border-top:none;padding:32px 48px;">
    <p style="margin:0 0 4px 0;font-size:10px;letter-spacing:0.25em;text-transform:uppercase;color:#73A2AC;">Your Sunday Checklist</p>
    <p style="margin:0 0 20px 0;font-size:12px;color:#444444;font-style:italic;">Rest is productive. This is part of the challenge.</p>
    <table width="100%" cellpadding="0" cellspacing="0">${checklistHtml}</table>
  </td></tr>

  <!-- LOOKING AHEAD -->
  <tr><td style="background:#ffffff;border:1.5px solid #73A2AC;border-top:none;padding:24px 48px;">
    <p style="margin:0 0 10px 0;font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:#73A2AC;">Coming Up This Week</p>
    <p style="margin:0 0 6px;font-size:13px;color:#1a1a1a;">→ ${weekData.miniGoals[0]}</p>
    <p style="margin:0;font-size:13px;color:#1a1a1a;">→ ${weekData.miniGoals[1]}</p>
  </td></tr>

  <!-- SONG -->
  <tr><td style="background:#ffffff;border:1.5px solid #FBAA82;border-top:none;padding:32px 48px;">
    <p style="margin:0 0 18px 0;font-size:10px;letter-spacing:0.25em;text-transform:uppercase;color:#FBAA82;">A Song for Your Sunday</p>
    <table cellpadding="0" cellspacing="0"><tr>
      <td style="width:48px;height:48px;border:1.5px solid #FBAA82;border-radius:50%;text-align:center;vertical-align:middle;">
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M6 3.5v9L13 8 6 3.5z" fill="#FBAA82"/></svg>
      </td>
      <td style="padding-left:16px;">
        <p style="margin:0 0 3px 0;font-size:17px;font-style:italic;color:#1a1a1a;">"${song.title}"</p>
        <p style="margin:0 0 4px 0;font-size:13px;color:#444444;">${song.artist}</p>
        <p style="margin:0;font-size:11px;color:#FBAA82;font-style:italic;">${song.vibe}</p>
      </td>
    </tr></table>
  </td></tr>

  <!-- FOOTER -->
  <tr><td style="background:#ffffff;border:1.5px solid #0B5D69;border-top:none;border-radius:0 0 16px 16px;padding:28px 48px;text-align:center;">
    <p style="margin:0 0 6px 0;font-size:13px;color:#0B5D69;font-style:italic;">Rest well, ${USER_NAME}. You have earned every minute of today.</p>
    <p style="margin:0;font-size:11px;color:#73A2AC;">The woman you are becoming rests without guilt. 🌿</p>
  </td></tr>

</table>
</td></tr></table>
</body></html>`;
}

// ─────────────────────────────────────────────────────────────
// BUILD WEEKDAY EMAIL
// ─────────────────────────────────────────────────────────────
function buildWeekdayHtml({ letter, song, weekData, monthData, dayNum, weekNum, monthNum, dateStr }) {
  const progress = Math.round((dayNum / CHALLENGE_DAYS) * 100);

  const goalsHtml = weekData.coreGoals.map((g, i) => `
    <tr>
      <td style="padding:12px 0;border-bottom:1px solid rgba(115,162,172,0.2);">
        <table cellpadding="0" cellspacing="0" border="0" width="100%"><tr>
          <td style="width:28px;height:28px;border:1.5px solid #73A2AC;border-radius:50%;text-align:center;vertical-align:middle;font-size:11px;color:#73A2AC;">${i + 1}</td>
          <td style="padding-left:14px;font-size:14px;color:#1a1a1a;line-height:1.6;">${g}</td>
        </tr></table>
      </td>
    </tr>`).join("");

  const miniGoalsHtml = weekData.miniGoals.map(mg =>
    `<tr><td style="padding:6px 0;font-size:12px;color:#444444;">→ ${mg}</td></tr>`
  ).join("");

  const letterHtml = letter.split("\n\n").map(p =>
    `<p style="margin:0 0 16px 0;font-size:14px;line-height:1.85;color:#1a1a1a;font-style:italic;">${p.trim()}</p>`
  ).join("");

  return `<!DOCTYPE html><html>
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f5f0eb;font-family:Georgia,'Times New Roman',serif;">
<table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f5f0eb;padding:40px 16px;">
<tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;">

  <!-- HEADER -->
  <tr><td style="background:#ffffff;border:1.5px solid #0B5D69;border-radius:16px 16px 0 0;padding:40px 48px;text-align:center;">
    <p style="margin:0 0 4px 0;font-size:10px;letter-spacing:0.28em;text-transform:uppercase;color:#0B5D69;">50-Day Challenge · Day ${dayNum} of 50</p>
    <h1 style="margin:0 0 6px 0;font-size:32px;font-weight:400;color:#0B5D69;font-style:italic;">Your Morning Brief</h1>
    <p style="margin:0;font-size:13px;color:#73A2AC;letter-spacing:0.05em;">${dateStr}</p>
    <p style="margin:10px 0 0 0;font-size:11px;color:#73A2AC;font-style:italic;">Week ${weekNum} of 7 · Month ${monthNum}: ${monthData.theme}</p>
    <p style="margin:4px 0 0 0;font-size:11px;color:#73A2AC;font-style:italic;">${weekData.theme}</p>
  </td></tr>

  <!-- PROGRESS BAR -->
  <tr><td style="background:#ffffff;border-left:1.5px solid #0B5D69;border-right:1.5px solid #0B5D69;padding:16px 48px 24px;">
    <table width="100%" cellpadding="0" cellspacing="0"><tr>
      <td style="font-size:10px;color:#FBAA82;text-transform:uppercase;letter-spacing:0.1em;padding-bottom:8px;">Overall Progress</td>
      <td align="right" style="font-size:10px;color:#FBAA82;padding-bottom:8px;">${progress}% complete</td>
    </tr></table>
    <table width="100%" cellpadding="0" cellspacing="0"><tr>
      <td style="background:rgba(251,170,130,0.15);border-radius:2px;height:3px;">
        <div style="background:#FBAA82;height:3px;width:${progress}%;border-radius:2px;"></div>
      </td>
    </tr></table>
  </td></tr>

  <!-- MONTHLY GOAL -->
  <tr><td style="background:#ffffff;border:1.5px solid #73A2AC;border-top:none;padding:20px 48px;">
    <p style="margin:0 0 8px 0;font-size:10px;letter-spacing:0.22em;text-transform:uppercase;color:#73A2AC;">Month ${monthNum} Goal</p>
    <p style="margin:0;font-size:13px;color:#0B5D69;line-height:1.7;font-style:italic;">${monthData.goal}</p>
  </td></tr>

  <!-- LETTER -->
  <tr><td style="background:#ffffff;border:1.5px solid #FBAA82;border-top:none;padding:40px 48px;">
    <p style="margin:0 0 18px 0;font-size:10px;letter-spacing:0.25em;text-transform:uppercase;color:#FBAA82;">A letter from future you</p>
    <div style="border-left:2px solid #FBAA82;padding-left:20px;">${letterHtml}</div>
  </td></tr>

  <!-- DAILY GOALS -->
  <tr><td style="background:#ffffff;border:1.5px solid #73A2AC;border-top:none;padding:32px 48px;">
    <p style="margin:0 0 4px 0;font-size:10px;letter-spacing:0.25em;text-transform:uppercase;color:#73A2AC;">Your 4 Core Goals Today</p>
    <p style="margin:0 0 20px 0;font-size:12px;color:#444444;font-style:italic;">4 tasks to move you forward today</p>
    <table width="100%" cellpadding="0" cellspacing="0">${goalsHtml}</table>
    <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:24px;padding-top:20px;border-top:0.5px solid rgba(115,162,172,0.25);">
      <tr><td style="font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:#73A2AC;padding-bottom:10px;">This Week's Mini-Goals</td></tr>
      ${miniGoalsHtml}
    </table>
  </td></tr>

  <!-- SONG -->
  <tr><td style="background:#ffffff;border:1.5px solid #FBAA82;border-top:none;padding:32px 48px;">
    <p style="margin:0 0 18px 0;font-size:10px;letter-spacing:0.25em;text-transform:uppercase;color:#FBAA82;">Today's Song</p>
    <table cellpadding="0" cellspacing="0"><tr>
      <td style="width:48px;height:48px;border:1.5px solid #FBAA82;border-radius:50%;text-align:center;vertical-align:middle;">
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M6 3.5v9L13 8 6 3.5z" fill="#FBAA82"/></svg>
      </td>
      <td style="padding-left:16px;">
        <p style="margin:0 0 3px 0;font-size:17px;font-style:italic;color:#1a1a1a;">"${song.title}"</p>
        <p style="margin:0 0 4px 0;font-size:13px;color:#444444;">${song.artist}</p>
        <p style="margin:0;font-size:11px;color:#FBAA82;font-style:italic;">${song.vibe}</p>
      </td>
    </tr></table>
    <p style="margin:14px 0 0 0;font-size:12px;color:#444444;">Search it on Spotify or YouTube to start your morning right.</p>
  </td></tr>

  <!-- FOOTER -->
  <tr><td style="background:#ffffff;border:1.5px solid #0B5D69;border-top:none;border-radius:0 0 16px 16px;padding:28px 48px;text-align:center;">
    <p style="margin:0 0 6px 0;font-size:13px;color:#0B5D69;font-style:italic;">Day ${dayNum} of 50. Week ${weekNum} of 7. You are doing it, ${USER_NAME}.</p>
    <p style="margin:0;font-size:11px;color:#73A2AC;">The woman you are becoming is worth every single morning. 🌱</p>
  </td></tr>

</table>
</td></tr></table>
</body></html>`;
}

// ─────────────────────────────────────────────────────────────
// MAIN
// ─────────────────────────────────────────────────────────────
async function main() {
  const toEmail = process.env.TO_EMAIL;
  if (!toEmail) throw new Error("TO_EMAIL environment variable is required");
  if (!process.env.ANTHROPIC_API_KEY) throw new Error("ANTHROPIC_API_KEY is required");
  if (!process.env.RESEND_API_KEY) throw new Error("RESEND_API_KEY is required");

  const today = new Date();
  const sunday = isSunday(today);
  const { dayNum, weekNum, monthNum } = getDayAndWeek(today);
  const weekData = WEEKLY_FOCUS[weekNum];
  const monthData = MONTHLY_GOALS[monthNum];
  const song = SONGS[(dayNum - 1) % SONGS.length];
  const dateStr = today.toLocaleDateString("en-KE", {
    weekday: "long", year: "numeric", month: "long", day: "numeric",
  });

  console.log(`📅 Day ${dayNum}/${CHALLENGE_DAYS} | Week ${weekNum}/7 | Month ${monthNum}/2 | ${sunday ? "Sunday 🌿" : "Weekday"}`);

  if (sunday) {
    console.log("☀️  Generating Sunday reset email...");
    const note = await generateSundayNote(dayNum, weekNum, weekData, monthData);
    const html = buildSundayHtml({ note, song, dayNum, weekNum, monthNum, monthData, weekData, dateStr });
    const subject = `☀️ Day ${dayNum}/50 — Your Sunday Reset, ${USER_NAME}`;
    await sendEmail(subject, html, toEmail);
  } else {
    console.log("🌅 Generating weekday morning brief...");
    const letter = await generateLetter(dayNum, weekNum, weekData, monthData);
    const html = buildWeekdayHtml({ letter, song, weekData, monthData, dayNum, weekNum, monthNum, dateStr });
    const subject = `🌅 Day ${dayNum}/50 — Your Morning Brief, ${USER_NAME}`;
    await sendEmail(subject, html, toEmail);
  }
}

main().catch((err) => {
  console.error("❌ Error:", err.message);
  process.exit(1);
});
