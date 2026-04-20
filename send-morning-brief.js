// ─────────────────────────────────────────────────────────────
// 75-DAY CHALLENGE — MORNING BRIEF
// Albina Nyawira Muturi
// ─────────────────────────────────────────────────────────────

const CHALLENGE_START = new Date("2026-04-18");
const USER_NAME = "Albina";

// ─────────────────────────────────────────────────────────────
// MONTHLY GOALS
// ─────────────────────────────────────────────────────────────
const MONTHLY_GOALS = {
  1: {
    theme: "Root & Routine",
    goal: "Build non-negotiable daily habits: consistent morning meditation, gym 3x/week, 2x weekly content posts, and masterclass outline done.",
  },
  2: {
    theme: "Build & Launch",
    goal: "Turn the foundation into real output: host Soirée Event #1, publish masterclass landing page, land at least one freelance inquiry, and submit Schengen visa application.",
  },
  3: {
    theme: "Expand & Arrive",
    goal: "Finish strong: masterclass has its first students, posting 3x/week consistently, physically and mentally the strongest you have been, and Germany-ready.",
  },
};

// ─────────────────────────────────────────────────────────────
// WEEKLY FOCUS — no hardcoded coreGoals, Gemini generates them
// ─────────────────────────────────────────────────────────────
const WEEKLY_FOCUS = {
  1: {
    month: 1,
    theme: "Foundation Week — Build the Floor",
    miniGoals: [
      "Meditate 4 out of 6 mornings (even 5 minutes counts)",
      "Post 2 pieces of AI content this week",
    ],
  },
  2: {
    month: 1,
    theme: "Momentum Week — Show Up Professionally",
    miniGoals: [
      "Draft your AI Masterclass outline — topic, audience, 3 module titles",
      "Plan Soirée Event #1 — pick a date, theme, and venue",
    ],
  },
  3: {
    month: 1,
    theme: "Clarity Week — Who Are You Building For?",
    miniGoals: [
      "Complete 1 AI upskilling module (DeepLearning.AI or similar)",
      "Start your Schengen visa document checklist",
    ],
  },
  4: {
    month: 1,
    theme: "Output Week — Make Something Real",
    miniGoals: [
      "Record and post your first masterclass teaser or promo clip",
      "Reach out to 3 potential freelance leads or collaborators",
    ],
  },
  5: {
    month: 1,
    theme: "Review & Reset — Close Out Month 1",
    miniGoals: [
      "Do a Month 1 reflection: what habits stuck, what needs adjusting",
      "Confirm Soirée Event #1 details — venue, date, guest list",
    ],
  },
  6: {
    month: 2,
    theme: "Launch Prep — Build in Public",
    miniGoals: [
      "Draft your masterclass landing page copy",
      "Post 3x this week — consistency is the algorithm",
    ],
  },
  7: {
    month: 2,
    theme: "Soirée Week — Host Your First Event",
    miniGoals: [
      "Host or finalise Soirée Event #1 this week",
      "Collect at least 3 masterclass waitlist sign-ups",
    ],
  },
  8: {
    month: 2,
    theme: "Visa & Freelance Week — Handle Your Business",
    miniGoals: [
      "Submit or book your Schengen visa appointment",
      "Send proposals to at least 2 freelance prospects",
    ],
  },
  9: {
    month: 2,
    theme: "Masterclass Launch — Make It Official",
    miniGoals: [
      "Publish your masterclass landing page publicly",
      "Get your first student or paid sign-up",
    ],
  },
  10: {
    month: 3,
    theme: "Expand & Arrive — Finish Like a Champion",
    miniGoals: [
      "Hit 3x/week content posting consistently through to Day 75",
      "Confirm Germany trip logistics — flights, accommodation, itinerary",
    ],
  },
};

// ─────────────────────────────────────────────────────────────
// SONGS (75 unique — one per day)
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
  { title: "Empire State of Mind", artist: "Jay-Z ft. Alicia Keys", vibe: "Big city, bigger dreams" },
  { title: "Don't Stop Me Now", artist: "Queen", vibe: "Pure unstoppable joy" },
  { title: "Upgrade U", artist: "Beyoncé ft. Jay-Z", vibe: "Elevated and polished" },
  { title: "This Is Me", artist: "Keala Settle", vibe: "Own every part of who you are" },
  { title: "Eye of the Tiger", artist: "Survivor", vibe: "Classic pump-up — no shame" },
  { title: "Dancing in the Moonlight", artist: "Toploader", vibe: "Pure feel-good energy" },
  { title: "Better Days", artist: "Ant Clemons ft. Justin Timberlake", vibe: "Hopeful and warm" },
  { title: "Shake It Out", artist: "Florence and the Machine", vibe: "Release what is heavy, move forward" },
  { title: "Power", artist: "Kanye West", vibe: "Grandiose and motivating" },
  { title: "Roar", artist: "Katy Perry", vibe: "Find your voice today" },
  { title: "Champion", artist: "Kanye West ft. Santogold", vibe: "Smooth confidence" },
  { title: "Glorious", artist: "Macklemore ft. Skylar Grey", vibe: "Emotional and uplifting" },
  { title: "Work", artist: "Rihanna", vibe: "Dedication is the vibe" },
  { title: "Worth It", artist: "Fifth Harmony", vibe: "You are worth every effort" },
  { title: "On Top of the World", artist: "Imagine Dragons", vibe: "Celebratory morning energy" },
  { title: "Midnight Rain", artist: "Taylor Swift", vibe: "Dreamy and introspective" },
  { title: "Titanium", artist: "David Guetta ft. Sia", vibe: "You are bulletproof today" },
  { title: "New Rules", artist: "Dua Lipa", vibe: "Setting boundaries and keeping them" },
  { title: "Hall of Fame", artist: "The Script ft. will.i.am", vibe: "You can be the greatest" },
  { title: "I Was Here", artist: "Beyoncé", vibe: "Leave your mark today" },
  { title: "Clarity", artist: "Zedd ft. Foxes", vibe: "Sharp focus energy" },
  { title: "Wings", artist: "Little Mix", vibe: "Rise above the noise" },
  { title: "Stronger", artist: "Kelly Clarkson", vibe: "What does not break you..." },
  { title: "Lovely Day", artist: "Bill Withers", vibe: "The ultimate feel-good morning song" },
  { title: "I Will Survive", artist: "Gloria Gaynor", vibe: "A classic for a reason" },
  { title: "Viva La Vida", artist: "Coldplay", vibe: "Grand, sweeping, and motivating" },
  { title: "One Step Closer", artist: "Linkin Park", vibe: "For when you need to push through" },
  { title: "Beautiful Day", artist: "U2", vibe: "It is a beautiful day — act like it" },
  { title: "The Greatest", artist: "Sia ft. Kendrick Lamar", vibe: "You are built for this" },
  { title: "Flawless", artist: "Beyoncé", vibe: "Wake up flawless" },
  { title: "I Am Light", artist: "India.Arie", vibe: "Grounding and soulful" },
  { title: "Juice", artist: "Lizzo", vibe: "Confidence is your best outfit" },
  { title: "Come Alive", artist: "The Greatest Showman Cast", vibe: "This is your moment" },
  { title: "Dreams", artist: "Fleetwood Mac", vibe: "Timeless and floaty" },
  { title: "Run", artist: "Joji", vibe: "Soft and introspective — for a slow start" },
  { title: "Golden Hour", artist: "JVKE", vibe: "Warm and glowing — like this season of your life" },
  { title: "Woman King", artist: "Iron & Wine", vibe: "Quiet strength" },
  { title: "Slow Motion", artist: "Trey Songz", vibe: "Take it easy this morning" },
  { title: "Gold", artist: "Kiiara", vibe: "Understated power" },
  { title: "Light", artist: "Kacey Musgraves", vibe: "Soft and hopeful" },
  { title: "Titanium", artist: "David Guetta ft. Sia", vibe: "Finish Day 75 bulletproof" },
  { title: "Golden", artist: "Jill Scott", vibe: "You made it. Walk in sunshine." },
];

// ─────────────────────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────────────────────
function getDayAndWeek(today) {
  const diffMs = today - CHALLENGE_START;
  const dayNum = Math.max(1, Math.min(Math.floor(diffMs / (1000 * 60 * 60 * 24)) + 1, 75));
  let weekNum;
  if (dayNum <= 7) weekNum = 1;
  else if (dayNum <= 14) weekNum = 2;
  else if (dayNum <= 21) weekNum = 3;
  else if (dayNum <= 28) weekNum = 4;
  else if (dayNum <= 35) weekNum = 5;
  else if (dayNum <= 42) weekNum = 6;
  else if (dayNum <= 49) weekNum = 7;
  else if (dayNum <= 56) weekNum = 8;
  else if (dayNum <= 63) weekNum = 9;
  else weekNum = 10;
  const monthNum = WEEKLY_FOCUS[weekNum].month;
  return { dayNum, weekNum, monthNum };
}

function getDayOfWeek(date) {
  return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][date.getDay()];
}

// ─────────────────────────────────────────────────────────────
// GEMINI API CALL (shared helper)
// ─────────────────────────────────────────────────────────────
async function callGemini(prompt) {
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { maxOutputTokens: 1000, temperature: 0.9 },
      }),
    }
  );
  const data = await response.json();
  if (data.error) throw new Error(`Gemini error: ${data.error.message}`);
  return data.candidates[0].content.parts[0].text;
}

// ─────────────────────────────────────────────────────────────
// GENERATE LETTER
// ─────────────────────────────────────────────────────────────
async function generateLetter(dayNum, weekNum, weekData, monthData, dayOfWeek) {
  const prompt = `You are Albina Nyawira Muturi writing a short, warm, deeply personal letter to her past self on Day ${dayNum} of her 75-day challenge. Today is ${dayOfWeek}.

Context about Albina:
- Senior Full-Stack Engineer in Nairobi, Kenya building her path in AI education
- Unemployed for almost a year, building: an AI masterclass, Dame-Techie brand (~13k followers), and Soirée events brand
- Wants to be the go-to woman in tech in Kenya
- Gym 3-4x/week, swimming lessons, daily meditation goal, working on financial security
- Boyfriend in Germany, planning July visit — Schengen visa in progress
- Currently Week ${weekNum} of 10 | Month ${monthData.theme}
- This week: ${weekData.theme}
- Mini-goals this week: "${weekData.miniGoals[0]}" and "${weekData.miniGoals[1]}"
- Monthly goal: ${monthData.goal}

Write a letter from future Albina (Day 76 version) to present-day Albina:
- Warm, personal, intimate — not corporate
- 3-4 short paragraphs
- Reference the day of the week (${dayOfWeek}) and where she is in the challenge naturally
- End with one powerful sentence of encouragement
- Tone: best friend who already made it through
- Do NOT start with "I remember"

Return ONLY the letter. No labels or headers.`;

  return callGemini(prompt);
}

// ─────────────────────────────────────────────────────────────
// GENERATE DAILY TO-DO LIST
// ─────────────────────────────────────────────────────────────
async function generateTodos(dayNum, weekNum, weekData, monthData, dayOfWeek) {
  const prompt = `You are a smart, warm accountability coach generating a daily to-do list for Albina Nyawira Muturi on Day ${dayNum} of her 75-day challenge. Today is ${dayOfWeek}.

Context about Albina:
- Senior Full-Stack Engineer in Nairobi, Kenya pivoting into AI education and entrepreneurship
- Currently building: an AI masterclass, Dame-Techie content brand (~13k followers on LinkedIn/X/TikTok), and Soirée events brand
- Gym 3-4x/week, learning to swim (9 classes left), trying to meditate daily, wants to reduce lower belly fat through better diet
- Boyfriend in Germany, planning July visit — needs Schengen visa documents
- Financially tight right now — needs freelance income and masterclass revenue
- Week ${weekNum} of 10 | This week's theme: "${weekData.theme}"
- This week's mini-goals: "${weekData.miniGoals[0]}" and "${weekData.miniGoals[1]}"
- This month's goal: "${monthData.goal}"

Generate exactly 4 daily to-do items for today (${dayOfWeek}, Day ${dayNum}). Rules:
- Each task must be SPECIFIC, ACTIONABLE, and completable in one day
- Tasks should feel PROGRESSIVE — ${dayOfWeek} tasks should make sense for where she is in the week
- Cover a MIX of areas: professional (masterclass/content/freelance), health (gym/diet/meditation), and personal (visa/relationships/mindset)
- Tasks should directly feed into this week's mini-goals and monthly goal
- Keep each task to ONE clear sentence — no sub-bullets
- Make them feel warm and encouraging, not corporate or harsh
- Vary the difficulty: 2 medium tasks, 1 easy win, 1 stretch task
- Do NOT repeat the same tasks every day — consider it is ${dayOfWeek} and Day ${dayNum} specifically

Return ONLY a valid JSON array of exactly 4 strings. No explanation, no markdown, no backticks. Example format:
["Task one here", "Task two here", "Task three here", "Task four here"]`;

  const raw = await callGemini(prompt);

  // Clean and parse JSON safely
  const cleaned = raw.replace(/```json|```/g, "").trim();
  try {
    const parsed = JSON.parse(cleaned);
    if (Array.isArray(parsed) && parsed.length === 4) return parsed;
    throw new Error("Invalid array");
  } catch {
    // Fallback: extract quoted strings if JSON parse fails
    const matches = cleaned.match(/"([^"]+)"/g);
    if (matches && matches.length >= 4) {
      return matches.slice(0, 4).map(s => s.replace(/"/g, ""));
    }
    // Last resort fallback
    return [
      "Complete your morning meditation before opening any apps",
      "Do one focused work session on your masterclass or content today",
      "Hit the gym or do a 20-minute home workout",
      "Reach out to one person — freelance lead, collaborator, or friend",
    ];
  }
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
// BUILD HTML EMAIL
// ─────────────────────────────────────────────────────────────
function buildEmailHtml({ letter, todos, song, weekData, monthData, dayNum, weekNum, monthNum, dateStr }) {
  const progress = Math.round((dayNum / 75) * 100);

  const todosHtml = todos.map((task, i) => `
    <tr>
      <td style="padding:12px 0;border-bottom:1px solid #f0ebe3;">
        <table cellpadding="0" cellspacing="0" border="0" width="100%"><tr>
          <td style="width:28px;height:28px;background:#f5ede0;border-radius:50%;text-align:center;vertical-align:middle;font-size:11px;color:#b8892a;font-weight:700;flex-shrink:0;">${i + 1}</td>
          <td style="padding-left:14px;font-size:14px;color:#4a4035;line-height:1.6;">${task}</td>
        </tr></table>
      </td>
    </tr>`).join("");

  const miniGoalsHtml = weekData.miniGoals
    .map(mg => `<tr><td style="padding:6px 0;font-size:13px;color:#9a8e80;">→ ${mg}</td></tr>`)
    .join("");

  const letterHtml = letter
    .split("\n\n")
    .map(p => `<p style="margin:0 0 16px 0;font-size:15px;line-height:1.85;color:#5a4e42;font-style:italic;">${p.trim()}</p>`)
    .join("");

  return `<!DOCTYPE html><html>
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f7f3ee;font-family:Georgia,'Times New Roman',serif;">
<table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f7f3ee;padding:40px 16px;">
<tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;">

  <!-- HEADER -->
  <tr><td style="background:#1a1410;border-radius:16px 16px 0 0;padding:40px 48px;text-align:center;">
    <p style="margin:0 0 4px 0;font-size:10px;letter-spacing:0.25em;text-transform:uppercase;color:#c9a96e;">75-Day Challenge · Day ${dayNum} of 75</p>
    <h1 style="margin:0 0 6px 0;font-size:32px;font-weight:400;color:#f0e8d8;font-style:italic;">Your Morning Brief</h1>
    <p style="margin:0;font-size:13px;color:#7a6e62;">${dateStr}</p>
    <p style="margin:12px 0 0 0;font-size:11px;color:#c9a96e;font-style:italic;">Week ${weekNum} of 10 · Month ${monthNum}: ${monthData.theme}</p>
    <p style="margin:6px 0 0 0;font-size:11px;color:#7a6e62;font-style:italic;">${weekData.theme}</p>
  </td></tr>

  <!-- PROGRESS BAR -->
  <tr><td style="background:#1a1410;padding:0 48px 32px 48px;">
    <table width="100%" cellpadding="0" cellspacing="0"><tr>
      <td style="font-size:10px;color:#7a6e62;text-transform:uppercase;letter-spacing:0.1em;padding-bottom:8px;">Overall Progress</td>
      <td align="right" style="font-size:10px;color:#c9a96e;padding-bottom:8px;">${progress}% complete</td>
    </tr></table>
    <table width="100%" cellpadding="0" cellspacing="0"><tr>
      <td style="background:#2e2820;border-radius:2px;height:4px;">
        <div style="background:linear-gradient(90deg,#c9a96e,#e8c98e);height:4px;width:${progress}%;border-radius:2px;"></div>
      </td>
    </tr></table>
  </td></tr>

  <!-- MONTHLY GOAL -->
  <tr><td style="background:#2a2018;padding:20px 48px;">
    <p style="margin:0 0 8px 0;font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:#c9a96e;">🎯 Month ${monthNum} Goal</p>
    <p style="margin:0;font-size:13px;color:#a89880;line-height:1.7;font-style:italic;">${monthData.goal}</p>
  </td></tr>

  <!-- LETTER -->
  <tr><td style="background:#ffffff;padding:40px 48px;">
    <p style="margin:0 0 20px 0;font-size:10px;letter-spacing:0.25em;text-transform:uppercase;color:#c9a96e;">💌 A Letter From Future You</p>
    <div style="border-left:3px solid #f0e0c0;padding-left:20px;">${letterHtml}</div>
  </td></tr>

  <!-- DAILY TO-DOS -->
  <tr><td style="background:#faf7f3;padding:32px 48px;">
    <p style="margin:0 0 6px 0;font-size:10px;letter-spacing:0.25em;text-transform:uppercase;color:#c9a96e;">✅ Today's To-Do List</p>
    <p style="margin:0 0 20px 0;font-size:12px;color:#b0a898;font-style:italic;">4 manageable tasks to move you forward today</p>
    <table width="100%" cellpadding="0" cellspacing="0">${todosHtml}</table>
    <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:24px;padding-top:20px;border-top:1px solid #ede8e0;">
      <tr><td style="font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:#c9a96e;padding-bottom:10px;">This Week's Mini-Goals</td></tr>
      ${miniGoalsHtml}
    </table>
  </td></tr>

  <!-- SONG -->
  <tr><td style="background:#ffffff;padding:32px 48px;">
    <p style="margin:0 0 20px 0;font-size:10px;letter-spacing:0.25em;text-transform:uppercase;color:#c9a96e;">🎵 Today's Song</p>
    <table cellpadding="0" cellspacing="0"><tr>
      <td style="width:52px;height:52px;background:linear-gradient(135deg,#c9a96e,#8b6914);border-radius:50%;text-align:center;vertical-align:middle;font-size:22px;">♪</td>
      <td style="padding-left:16px;">
        <p style="margin:0 0 3px 0;font-size:17px;font-style:italic;color:#2a2018;font-weight:600;">"${song.title}"</p>
        <p style="margin:0 0 4px 0;font-size:13px;color:#7a6e62;">${song.artist}</p>
        <p style="margin:0;font-size:12px;color:#c9a96e;font-style:italic;">${song.vibe}</p>
      </td>
    </tr></table>
    <p style="margin:16px 0 0 0;font-size:12px;color:#b0a898;">Search it on Spotify or YouTube to start your morning right. 🎧</p>
  </td></tr>

  <!-- FOOTER -->
  <tr><td style="background:#1a1410;border-radius:0 0 16px 16px;padding:28px 48px;text-align:center;">
    <p style="margin:0 0 6px 0;font-size:13px;color:#c9a96e;font-style:italic;">Day ${dayNum} of 75. Week ${weekNum} of 10. You are doing it, ${USER_NAME}.</p>
    <p style="margin:0;font-size:12px;color:#5a5048;">The woman you are becoming is worth every single morning. 🌱</p>
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
  if (!process.env.GEMINI_API_KEY) throw new Error("GEMINI_API_KEY is required");
  if (!process.env.RESEND_API_KEY) throw new Error("RESEND_API_KEY is required");

  const today = new Date();
  const { dayNum, weekNum, monthNum } = getDayAndWeek(today);
  const weekData = WEEKLY_FOCUS[weekNum];
  const monthData = MONTHLY_GOALS[monthNum];
  const song = SONGS[(dayNum - 1) % SONGS.length];
  const dayOfWeek = getDayOfWeek(today);
  const dateStr = today.toLocaleDateString("en-KE", {
    weekday: "long", year: "numeric", month: "long", day: "numeric",
  });

  console.log(`📅 Day ${dayNum}/75 | Week ${weekNum}/10 | Month ${monthNum}/3 | ${dayOfWeek}`);
  console.log(`🎯 ${weekData.theme}`);

  // Run both Gemini calls in parallel for speed
  console.log("⚡ Generating letter and to-do list in parallel...");
  const [letter, todos] = await Promise.all([
    generateLetter(dayNum, weekNum, weekData, monthData, dayOfWeek),
    generateTodos(dayNum, weekNum, weekData, monthData, dayOfWeek),
  ]);

  console.log("✍️  Letter generated");
  console.log("📋 To-do list generated:", todos);

  const html = buildEmailHtml({ letter, todos, song, weekData, monthData, dayNum, weekNum, monthNum, dateStr });
  const subject = `🌅 Day ${dayNum}/75 · ${dayOfWeek} — Your Morning Brief, ${USER_NAME}`;

  await sendEmail(subject, html, toEmail);
}

main().catch((err) => {
  console.error("❌ Error:", err.message);
  process.exit(1);
});