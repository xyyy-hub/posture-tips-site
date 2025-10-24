# Article Page Template: Using Reused Components

**Created:** October 24, 2025  
**Purpose:** Complete page template using components from neckhump.com  
**Status:** Copy-paste ready

---

## 🎯 COMPLETE ARTICLE TEMPLATE

This template uses all reused components plus the new posturetips.com branded components. Just fill in your content!

### File: `app/[article-slug]/page.js`

```javascript
import { Metadata } from 'next'
import ReadingProgress from '@/components/ReadingProgress'
import Breadcrumbs from '@/components/Breadcrumbs'
import SimpleAuthor from '@/components/SimpleAuthor'
import ShortAnswer from '@/components/ShortAnswer'
import KeyTakeaways from '@/components/KeyTakeaways'
import TableOfContents from '@/components/TableOfContents'
import FAQSection from '@/components/FAQSection'
import RelatedArticles from '@/components/RelatedArticles'
import NavigationPathway from '@/components/NavigationPathway'

// ==========================================
// METADATA (Update for each article)
// ==========================================

export const metadata = {
  title: 'Perfect Sitting Posture Guide | PostureTips.com',
  description: 'Learn perfect sitting posture for desk workers. Includes chair setup, monitor positioning, and break strategies to prevent pain.',
  alternates: {
    canonical: '/sitting-posture-guide'
  },
  openGraph: {
    title: 'Perfect Sitting Posture Guide',
    description: 'Learn perfect sitting posture for desk workers with this complete guide.',
    url: 'https://www.posturetips.com/sitting-posture-guide',
    type: 'article',
    images: [
      {
        url: 'https://www.posturetips.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'PostureTips.com - Perfect Sitting Posture Guide'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image'
  }
}

// ==========================================
// PAGE DATA (Update for each article)
// ==========================================

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Guides', href: '/guides' },
  { label: 'Sitting Posture' }
]

const tocSections = [
  { id: 'short-answer', title: 'Short Answer' },
  { id: 'key-takeaways', title: 'Key Takeaways' },
  { id: 'why-sitting-matters', title: 'Why Sitting Posture Matters' },
  { id: '90-90-90-rule', title: 'The 90-90-90 Rule' },
  { id: 'chair-setup', title: 'Chair Setup Guide' },
  { id: 'desk-monitor', title: 'Desk and Monitor Positioning' },
  { id: 'common-mistakes', title: 'Common Mistakes' },
  { id: 'movement-breaks', title: 'Movement Break Strategy' },
  { id: 'faq', title: 'Frequently Asked Questions' }
]

const keyTakeaways = [
  "Your chair and desk setup matter as much as your posture itself",
  "The '90-90-90 rule': 90-degree angles at ankles, knees, and elbows",
  "Sitting perfectly still is worse than moving—fidgeting is actually healthy",
  "Most people need a footrest, monitor riser, or both to achieve proper height",
  "Break frequency beats break length: five 2-minute breaks > one 10-minute break"
]

const faqData = [
  {
    question: "What is the best sitting position?",
    answer: "The best sitting position has your feet flat on the floor (or on a footrest), knees at a 90-degree angle slightly lower than your hips, back fully supported by your chair, and monitor at eye level about an arm's length away."
  },
  {
    question: "Should I use a footrest?",
    answer: "Yes, if your feet don't comfortably reach the floor when your chair is at the correct height. A footrest maintains the 90-degree ankle angle, which is crucial for proper posture and circulation."
  },
  {
    question: "How high should my desk chair be?",
    answer: "Your chair height is correct when your feet rest flat on the floor (or footrest), your knees form a 90-degree angle, and your elbows are at 90 degrees when your hands rest on your keyboard. Most people set their chair too low."
  },
  {
    question: "Where should my computer screen be?",
    answer: "Your monitor should be about an arm's length away (20-28 inches) with the top of the screen at or slightly below eye level. This prevents neck strain from looking up or down for extended periods."
  },
  {
    question: "Is it better to sit or stand while working?",
    answer: "Neither pure sitting nor pure standing is ideal. The best approach is to alternate between sitting and standing throughout the day, changing positions every 30-60 minutes to reduce strain on any single muscle group."
  },
  {
    question: "Can sitting cause permanent damage?",
    answer: "Prolonged poor sitting posture can lead to chronic muscle imbalances, spinal misalignment, and disc problems, but these are typically reversible with corrected posture and strengthening exercises. Early intervention is key."
  },
  {
    question: "How often should I take breaks?",
    answer: "Take a 5-minute standing or walking break every 45-60 minutes. Even micro-breaks (standing for 30 seconds) every 30 minutes help reduce the negative effects of prolonged sitting."
  },
  {
    question: "Are expensive office chairs worth it?",
    answer: "A quality ergonomic chair ($300-500) is worth it if you sit for 6+ hours daily. Key features to invest in: adjustable lumbar support, seat depth adjustment, and adjustable armrests. Expensive doesn't always mean better—focus on adjustability."
  },
  {
    question: "What if my desk is too high or low?",
    answer: "If your desk is too high, raise your chair and use a footrest. If it's too low, use desk risers or a keyboard tray. Ideally, your elbows should be at 90 degrees when typing, with your wrists in a neutral position."
  },
  {
    question: "Should I cross my legs while sitting?",
    answer: "No, crossing your legs regularly can lead to hip and pelvic misalignment, reduced circulation, and increased pressure on your lower back. Keep both feet flat on the floor or footrest for optimal posture."
  }
]

const relatedArticles = [
  {
    title: 'Standing Posture: Alignment Guide',
    description: 'Learn proper standing posture with alignment tests and common mistakes to avoid.',
    href: '/standing-posture-guide'
  },
  {
    title: 'Desk Ergonomics Setup Guide',
    description: 'Complete ergonomic workspace setup to prevent pain and improve productivity.',
    href: '/desk-ergonomics-guide'
  },
  {
    title: 'Daily 10-Minute Posture Routine',
    description: 'Simple exercises to strengthen the muscles that support good posture.',
    href: '/daily-posture-routine'
  }
]

const navigationPathway = {
  prev: {
    title: 'How to Improve Your Posture',
    href: '/how-to-improve-posture'
  },
  next: {
    title: 'Standing Posture Guide',
    href: '/standing-posture-guide'
  }
}

// ==========================================
// SCHEMA (Update for each article)
// ==========================================

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Perfect Sitting Posture for Desk Workers: Complete Guide",
  "description": "Learn perfect sitting posture for desk workers. Includes chair setup, monitor positioning, and break strategies.",
  "author": {
    "@type": "Organization",
    "name": "PostureTips Team"
  },
  "publisher": {
    "@type": "Organization",
    "name": "PostureTips.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.posturetips.com/logo.png"
    }
  },
  "datePublished": "2025-10-24",
  "dateModified": "2025-10-24",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.posturetips.com/sitting-posture-guide"
  }
}

// ==========================================
// PAGE COMPONENT
// ==========================================

export default function SittingPostureGuide() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Reading Progress Bar */}
      <ReadingProgress />

      {/* Main Article */}
      <article className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          {/* Breadcrumbs */}
          <Breadcrumbs items={breadcrumbItems} />

          {/* Article Header */}
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Perfect Sitting Posture for Desk Workers
            </h1>
            
            <SimpleAuthor 
              authorName="PostureTips Team"
              authorTitle="Posture Improvement Specialists"
              lastUpdated="2025-10-24"
            />
          </header>

          {/* Table of Contents (Desktop Only) */}
          <div className="hidden xl:block fixed left-8 top-32 w-64">
            <TableOfContents sections={tocSections} />
          </div>

          {/* Short Answer Block (AEO Optimized) */}
          <ShortAnswer>
            <p>
              Ideal sitting posture has your feet flat on the floor, knees and elbows at 
              90 degrees, back fully supported by your chair, and monitor at eye level about 
              an arm's length away. Take 5-minute standing breaks every 45 minutes to prevent 
              stiffness and maintain energy.
            </p>
          </ShortAnswer>

          {/* Key Takeaways (AEO Optimized) */}
          <KeyTakeaways takeaways={keyTakeaways} />

          {/* Main Content */}
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <h2 id="why-sitting-matters">Why Sitting Posture Matters</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The average desk worker sits 8-12 hours daily. Poor sitting posture during 
              these hours is the primary cause of neck pain, back pain, and headaches in 
              office workers. The good news? Most sitting-related problems are completely 
              fixable with proper setup and habits.
            </p>
            
            <p>
              Your spine has natural curves that need to be supported while sitting. When 
              you slouch, lean forward, or sit without proper support, these curves flatten 
              or exaggerate, putting excessive strain on your muscles, ligaments, and discs.
            </p>

            <p>
              This guide covers everything you need to achieve and maintain perfect sitting 
              posture throughout your workday, including specific adjustments for your chair, 
              desk, and monitor.
            </p>

            {/* Section 1 */}
            <h2 id="90-90-90-rule">The 90-90-90 Rule (Foundation)</h2>
            <p>
              The 90-90-90 rule is the foundation of proper sitting posture. This simple 
              principle ensures your body is positioned with minimal strain:
            </p>

            <ul>
              <li>
                <strong>90 degrees at ankles:</strong> Feet should rest flat on the floor 
                (or on a footrest) with your ankles at a 90-degree angle
              </li>
              <li>
                <strong>90 degrees at knees:</strong> Your knees should form a 90-degree 
                angle, with knees slightly lower than your hips
              </li>
              <li>
                <strong>90 degrees at elbows:</strong> When typing, your elbows should be 
                at a 90-degree angle with your upper arms hanging naturally at your sides
              </li>
            </ul>

            <p>
              These angles ensure proper blood circulation, reduce pressure on joints, and 
              maintain your spine's natural curves. If you can't achieve all three 90-degree 
              angles simultaneously, your desk, chair, or monitor height needs adjustment.
            </p>

            {/* Section 2 */}
            <h2 id="chair-setup">Step-by-Step Chair Setup</h2>
            <p>
              Your chair is the foundation of good sitting posture. Most office chairs have 
              5-7 adjustable features. Here's how to set each one correctly:
            </p>

            <h3>1. Seat Height Adjustment</h3>
            <p>
              <strong>How to adjust:</strong> Sit in your chair with your feet flat on the 
              floor. Adjust the height until your knees form a 90-degree angle and your 
              thighs are parallel to the floor or slightly angled down.
            </p>

            <p>
              <strong>Common mistake:</strong> Setting the chair too low. If your knees are 
              higher than your hips, raise your chair and use a footrest.
            </p>

            <h3>2. Seat Depth (Front-to-Back)</h3>
            <p>
              <strong>How to adjust:</strong> Sit all the way back in your chair. There 
              should be 2-4 finger widths of space between the front edge of the seat and 
              the back of your knees.
            </p>

            <p>
              <strong>Why it matters:</strong> Too much space and you won't have lumbar 
              support. Too little space and the seat edge will cut off circulation to your 
              legs.
            </p>

            <h3>3. Lumbar Support Positioning</h3>
            <p>
              <strong>How to adjust:</strong> Adjust the lumbar support (the curved pad on 
              the backrest) so it fits snugly into the curve of your lower back, about 
              waist height.
            </p>

            <p>
              <strong>Test it:</strong> When properly adjusted, you should feel gentle 
              pressure supporting your lower back curve. You shouldn't need to strain to 
              sit upright.
            </p>

            <h3>4. Backrest Angle</h3>
            <p>
              <strong>How to adjust:</strong> Set the backrest to 100-110 degrees 
              (slightly reclined). This reduces pressure on your lower back discs by up 
              to 40% compared to sitting bolt upright.
            </p>

            <p>
              <strong>Common mistake:</strong> Reclining too far (120+ degrees) forces you 
              to crane your neck forward to see your screen.
            </p>

            <h3>5. Armrest Height and Width</h3>
            <p>
              <strong>How to adjust:</strong> Set armrests so your elbows rest lightly on 
              them with your shoulders relaxed (not elevated). Your forearms should be 
              parallel to the floor.
            </p>

            <p>
              <strong>Alternative:</strong> If armrests push your elbows too wide or force 
              your shoulders up, remove them entirely. Bad armrests are worse than no 
              armrests.
            </p>

            {/* Section 3 */}
            <h2 id="desk-monitor">Desk and Monitor Positioning</h2>
            <p>
              Even with perfect chair setup, incorrect desk and monitor positioning will 
              ruin your posture. Follow these guidelines:
            </p>

            <h3>Monitor Distance</h3>
            <ul>
              <li><strong>Ideal distance:</strong> An arm's length away (20-28 inches)</li>
              <li><strong>Test:</strong> Extend your arm—your fingertips should just touch the screen</li>
              <li><strong>Adjustment:</strong> If text is too small, increase font size rather than moving closer</li>
            </ul>

            <h3>Monitor Height</h3>
            <ul>
              <li>
                <strong>Ideal height:</strong> Top of screen at or slightly below eye level 
                (1-2 inches below)
              </li>
              <li>
                <strong>Viewing angle:</strong> You should look slightly downward at the 
                center of the screen (10-20 degrees below horizontal)
              </li>
              <li>
                <strong>Solution:</strong> Use a monitor stand, laptop riser, or stack of 
                books to achieve proper height
              </li>
            </ul>

            <h3>Keyboard and Mouse Placement</h3>
            <ul>
              <li>
                <strong>Keyboard:</strong> Directly in front of you, close enough that 
                your elbows stay at 90 degrees
              </li>
              <li>
                <strong>Mouse:</strong> At the same level as keyboard, within easy reach 
                (no stretching)
              </li>
              <li>
                <strong>Wrist position:</strong> Keep wrists neutral (straight), not bent 
                up or down
              </li>
            </ul>

            {/* Section 4 */}
            <h2 id="common-mistakes">Common Sitting Mistakes to Avoid</h2>
            <p>
              Even with good setup, bad habits can creep in. Watch for these common mistakes:
            </p>

            <ol>
              <li>
                <strong>Perching on the edge of your chair:</strong> This eliminates 
                lumbar support and causes lower back strain. Sit all the way back.
              </li>
              <li>
                <strong>Crossing legs habitually:</strong> Creates hip and pelvic 
                imbalances. Keep both feet flat on the floor.
              </li>
              <li>
                <strong>Leaning forward toward screen:</strong> Usually means monitor is 
                too far, too low, or font is too small. Fix setup, don't lean.
              </li>
              <li>
                <strong>Phone cradled between ear and shoulder:</strong> Severe neck 
                strain. Use speakerphone or headset for calls.
              </li>
              <li>
                <strong>Armrests too high:</strong> Forces shoulders to elevate, causing 
                neck and shoulder tension. Lower or remove them.
              </li>
              <li>
                <strong>No lumbar support:</strong> Leads to slouching and lower back 
                pain. Adjust lumbar support or use a small cushion.
              </li>
              <li>
                <strong>Monitor too low:</strong> Most common mistake. Causes you to look 
                down all day, straining neck extensors. Raise it.
              </li>
            </ol>

            {/* Section 5 */}
            <h2 id="movement-breaks">Movement Breaks Strategy</h2>
            <p>
              Here's a counterintuitive truth: <strong>sitting perfectly still is worse 
              than sitting "badly" with movement.</strong> Your body needs movement to 
              maintain circulation, prevent stiffness, and keep muscles engaged.
            </p>

            <h3>Ideal Break Schedule</h3>
            <ul>
              <li>
                <strong>Every 30 minutes:</strong> Micro-movement (ankle circles, shoulder 
                rolls, stretch arms overhead—takes 30 seconds)
              </li>
              <li>
                <strong>Every 45-60 minutes:</strong> Stand up and walk around for 5 
                minutes (water break, bathroom, walk around office)
              </li>
              <li>
                <strong>Lunch break:</strong> 10-15 minute walk outside if possible
              </li>
            </ul>

            <h3>Desk Stretches You Can Do Sitting</h3>
            <ol>
              <li>
                <strong>Neck rotations:</strong> Slowly turn head left to right, 5 reps 
                each side
              </li>
              <li>
                <strong>Shoulder shrugs:</strong> Raise shoulders to ears, hold 3 seconds, 
                release. 10 reps
              </li>
              <li>
                <strong>Seated spinal twist:</strong> Rotate torso left, place right hand 
                on left armrest, hold 15 seconds. Repeat other side
              </li>
              <li>
                <strong>Ankle pumps:</strong> Flex and point feet, 20 reps to improve 
                circulation
              </li>
              <li>
                <strong>Wrist circles:</strong> Rotate wrists clockwise and 
                counterclockwise, 10 reps each direction
              </li>
            </ol>

            <p>
              Set a timer or use an app to remind you to take breaks. After 2-3 weeks, 
              movement breaks will become automatic.
            </p>

            {/* Conclusion */}
            <h2>Building the Habit</h2>
            <p>
              Perfect sitting posture isn't something you achieve once and forget. It 
              requires ongoing awareness and minor adjustments throughout your day. Here's 
              how to make it stick:
            </p>

            <ul>
              <li>
                <strong>Set hourly reminders:</strong> "Posture check!" on your phone or 
                computer
              </li>
              <li>
                <strong>Use visual cues:</strong> Place a sticky note on your monitor 
                saying "Shoulders back, feet flat"
              </li>
              <li>
                <strong>Before/after body scan:</strong> Check in with your body at the 
                start and end of work. Where do you feel tension?
              </li>
              <li>
                <strong>Weekly photos:</strong> Take side-view photos at your desk weekly 
                to track posture improvements
              </li>
              <li>
                <strong>Habit stacking:</strong> Link posture checks to existing habits 
                (every time you open email, check posture first)
              </li>
            </ul>

            <p>
              Most people find that good sitting posture becomes natural within 4-6 weeks 
              of consistent practice. Your muscles will adapt, and sitting correctly will 
              actually feel more comfortable than slouching.
            </p>

          </div>

          {/* FAQ Section */}
          <div id="faq" className="mt-12">
            <FAQSection faqs={faqData} />
          </div>

          {/* Related Articles */}
          <div className="mt-12">
            <RelatedArticles articles={relatedArticles} />
          </div>

          {/* Navigation Pathway */}
          <div className="mt-12">
            <NavigationPathway {...navigationPathway} />
          </div>

        </div>
      </article>
    </>
  )
}
```

---

## 🎯 QUICK CUSTOMIZATION GUIDE

### To create a new article from this template:

**1. Duplicate the template**
```bash
cp app/sitting-posture-guide/page.js app/your-new-article/page.js
```

**2. Update metadata (5 minutes)**
- Change `title`, `description`
- Update `canonical` URL path
- Update `openGraph` URLs and titles

**3. Update page data (10 minutes)**
- `breadcrumbItems` - navigation path
- `tocSections` - article sections with IDs
- `keyTakeaways` - 4-5 main points
- `faqData` - 8-12 questions/answers
- `relatedArticles` - 3 related articles
- `navigationPathway` - prev/next articles

**4. Update schema (2 minutes)**
- `headline`, `description`
- `datePublished`, `dateModified`
- `@id` URL

**5. Write content (60-90 minutes)**
- H1 title
- Short Answer block (40-60 words)
- Main content sections (follow outline)
- Match section IDs to TOC

**Total time: 2-3 hours per article** (including all SEO/AEO optimization)

---

## ✅ SEO/AEO CHECKLIST (Built Into Template)

This template already includes:

- ✅ Reading progress bar
- ✅ Breadcrumbs with schema
- ✅ Author byline with last updated date
- ✅ Short Answer block (AEO optimized)
- ✅ Key Takeaways (AEO optimized)
- ✅ Table of Contents (desktop)
- ✅ FAQ section with schema
- ✅ Related articles (internal linking)
- ✅ Navigation pathway (prev/next)
- ✅ Article JSON-LD schema
- ✅ Canonical URL
- ✅ Open Graph meta tags
- ✅ Semantic HTML structure
- ✅ Mobile responsive
- ✅ Proper heading hierarchy (H1 > H2 > H3)

**You just need to fill in the content!**

---

## 💡 PRO TIPS

### Writing the Short Answer Block:
- **40-60 words maximum** (strict)
- Start with "Ideal/Best/Perfect [topic]..."
- Include 2-3 specific, actionable points
- End with a timeframe or benefit
- Use simple language (8th grade reading level)

### Writing Key Takeaways:
- **4-5 points** (not more)
- Start each with action or insight
- Include specific numbers when possible
- Mix practical tips with conceptual understanding
- No fluff—every point should be valuable

### Writing FAQ Answers:
- **50-100 words per answer**
- Start with direct answer first sentence
- Expand with explanation second paragraph
- Include specific numbers and examples
- Link to related content when relevant

---

**Status:** ✅ Ready to use  
**Time to create new page:** 2-3 hours using this template  
**Next Action:** Copy template when writing your first posturetips.com article



