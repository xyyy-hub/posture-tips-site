import ReadingProgress from '../../components/ReadingProgress'
import Breadcrumbs from '../../components/Breadcrumbs'
import SimpleAuthor from '../../components/SimpleAuthor'
import ShortAnswer from '../../components/ShortAnswer'
import KeyTakeaways from '../../components/KeyTakeaways'
import TableOfContents from '../../components/TableOfContents'
import FAQSection from '../../components/FAQSection'
import RelatedArticles from '../../components/RelatedArticles'
import NavigationPathway from '../../components/NavigationPathway'

export const metadata = {
  title: 'Standing Posture Guide: How to Stand with Perfect Alignment',
  description: 'Learn proper standing posture with this complete guide. Includes alignment tests, common mistakes, and exercises to build lasting habits.',
  alternates: {
    canonical: '/standing-posture-guide'
  },
  openGraph: {
    title: 'Standing Posture Guide: How to Stand with Perfect Alignment',
    description: 'Learn proper standing posture with alignment tests and exercises.',
    url: 'https://www.posturetips.com/standing-posture-guide',
    type: 'article',
  },
}

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Guides', href: '/' },
  { label: 'Standing Posture Guide' }
]

const tocSections = [
  { id: 'short-answer', title: 'Short Answer' },
  { id: 'key-takeaways', title: 'Key Takeaways' },
  { id: 'what-is-good-posture', title: 'What Is Good Standing Posture?' },
  { id: 'wall-test', title: 'The Wall Test' },
  { id: 'perfect-position', title: 'Perfect Standing Position' },
  { id: 'common-problems', title: 'Common Posture Problems' },
  { id: 'long-periods', title: 'Standing for Long Periods' },
  { id: 'exercises', title: 'Exercises to Improve Standing' },
  { id: 'faq', title: 'Frequently Asked Questions' }
]

const keyTakeaways = [
  "Good standing posture should feel effortless, not rigid or forced",
  "Weight should be evenly distributed: 50% on each foot, centered over arches",
  "Your ears, shoulders, hips, knees, and ankles should form a straight vertical line (side view)",
  "Locking your knees causes fatigue—keep them soft with a slight bend",
  "Standing posture improves automatically when you strengthen core and glutes"
]

const faqData = [
  {
    question: "How should I stand with good posture?",
    answer: "Stand with feet hip-width apart, weight evenly distributed on both feet, knees slightly bent (not locked), pelvis neutral, shoulders back and down, and chin parallel to ground. Imagine a string pulling the crown of your head upward, elongating your spine naturally."
  },
  {
    question: "Should I lock my knees when standing?",
    answer: "No, never lock your knees when standing. Locking causes your pelvis to tilt forward, exaggerating lower back curve and putting strain on knee joints. Keep knees slightly bent (micro-bend) for optimal alignment and to prevent fatigue during prolonged standing."
  },
  {
    question: "Where should my weight be when standing?",
    answer: "Your weight should be evenly distributed: 50% on each foot, centered over your arches (not toes or heels). Avoid habitually shifting weight to one leg. If standing long periods, consciously shift weight between feet every 10-15 minutes to prevent fatigue."
  },
  {
    question: "How can I stand for long periods without pain?",
    answer: "Use a footrest to alternate feet every 15 minutes, wear supportive shoes, shift weight between feet regularly, do calf raises and ankle circles periodically, and take brief walking breaks every 30 minutes. An anti-fatigue mat also helps if you stand in one spot."
  },
  {
    question: "What is the wall test for posture?",
    answer: "Stand with back against wall, heels 6 inches from base. Your shoulders and buttocks should touch the wall, with about one hand's thickness of space behind your lower back and neck. If you can't achieve this comfortably or gaps are much larger, your standing posture needs work."
  },
  {
    question: "Is slouching while standing bad for you?",
    answer: "Yes, slouching while standing (weight on one hip, pelvis shifted) creates muscle imbalances, uneven pressure on spine, and can lead to chronic hip and back pain. While occasional slouching is fine, habitual one-legged standing causes long-term problems."
  },
  {
    question: "Can standing too straight cause back pain?",
    answer: "Yes, overcorrecting into military-style rigid posture causes muscle tension and fatigue. Good posture should feel relaxed and balanced, not forced. If standing straight causes pain, you're likely overarching your lower back or tensing muscles unnecessarily—focus on neutral alignment instead."
  },
  {
    question: "How do I keep good posture while standing at work?",
    answer: "Set up your workspace at proper height (elbows at 90 degrees), use a footrest to alternate feet, wear supportive shoes, take movement breaks every 30-45 minutes, do micro-movements (weight shifts, calf raises) throughout the day, and consider an anti-fatigue mat for prolonged standing."
  },
  {
    question: "Do certain shoes affect standing posture?",
    answer: "Yes significantly. High heels (over 2 inches) force pelvis forward and exaggerate lower back curve. Flat shoes with no arch support cause foot fatigue and compensatory posture changes. Best shoes for posture: low heel (0.5-1.5 inches), good arch support, cushioned sole, firm heel counter."
  },
  {
    question: "Can flat feet affect my standing posture?",
    answer: "Yes, flat feet (fallen arches) can affect standing posture by causing ankles to roll inward, which affects knee and hip alignment. This often leads to compensatory postural changes. Supportive shoes with arch support or custom orthotics can help maintain better standing alignment despite flat feet."
  }
]

const relatedArticles = [
  {
    title: 'Walking Posture Guide',
    description: 'Learn proper walking posture and gait mechanics.',
    href: '/walking-posture-guide'
  },
  {
    title: 'Daily 10-Minute Posture Routine',
    description: 'Exercises to strengthen muscles that support standing posture.',
    href: '/daily-posture-routine'
  },
  {
    title: 'Sitting Posture Guide',
    description: 'Master desk posture for the hours you spend sitting.',
    href: '/sitting-posture-guide'
  }
]

const navigationPathway = {
  prev: {
    title: 'Sitting Posture Guide',
    href: '/sitting-posture-guide'
  },
  next: {
    title: 'Sleep Posture Guide',
    href: '/sleep-posture-guide'
  }
}

const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.posturetips.com/standing-posture-guide#article",
      "headline": "Standing Posture Guide: How to Stand with Perfect Alignment",
      "description": "Learn proper standing posture with this complete guide. Includes alignment tests, common mistakes, and exercises to build lasting habits.",
      "author": {
        "@type": "Organization",
        "name": "PostureTips.com",
        "url": "https://www.posturetips.com"
      },
      "publisher": {
        "@type": "Organization",
        "name": "PostureTips.com",
        "url": "https://www.posturetips.com"
      },
      "datePublished": "2025-10-24",
      "dateModified": "2025-10-24",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.posturetips.com/standing-posture-guide"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.posturetips.com/standing-posture-guide#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.posturetips.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Guides",
          "item": "https://www.posturetips.com"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Standing Posture Guide"
        }
      ]
    },
    {
      "@type": "HowTo",
      "@id": "https://www.posturetips.com/standing-posture-guide#howto",
      "name": "How to Stand with Perfect Posture",
      "description": "Step-by-step guide to achieving proper standing alignment.",
      "totalTime": "PT5M",
      "step": [
        {
          "@type": "HowToStep",
          "name": "Position Your Feet",
          "text": "Stand with feet hip-width apart, weight evenly distributed 50% on each foot, centered over your arches."
        },
        {
          "@type": "HowToStep",
          "name": "Align Your Knees",
          "text": "Keep knees slightly bent (micro-bend), never locked. Locking knees causes fatigue and poor pelvic alignment."
        },
        {
          "@type": "HowToStep",
          "name": "Position Your Pelvis",
          "text": "Keep pelvis neutral - not tilted forward or backward. Your hip bones and pubic bone should be in same vertical plane."
        },
        {
          "@type": "HowToStep",
          "name": "Set Your Shoulders",
          "text": "Roll shoulders back and down naturally. Shoulders should be relaxed, not tensed or forced back military-style."
        },
        {
          "@type": "HowToStep",
          "name": "Align Your Head",
          "text": "Keep chin parallel to ground, head balanced directly over spine. Imagine a string pulling crown of your head upward."
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.posturetips.com/standing-posture-guide#faq",
      "mainEntity": faqData.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    }
  ]
}

export default function StandingPostureGuide() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      <ReadingProgress />

      <article className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          <Breadcrumbs items={breadcrumbItems} />

          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Standing Posture: Complete Alignment Guide
            </h1>
            
            <SimpleAuthor 
              authorName="PostureTips Team"
              authorTitle="Movement Specialists"
              lastUpdated="2025-10-24"
            />
          </header>

          <div className="hidden xl:block fixed left-8 top-32 w-64">
            <TableOfContents sections={tocSections} />
          </div>

          <ShortAnswer>
            Perfect standing posture has weight evenly distributed on both feet, knees slightly bent, pelvis neutral, shoulders back and down, and head balanced over your spine. Practice the wall test weekly to check your alignment and adjust as needed.
          </ShortAnswer>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
            <h3 className="font-semibold text-blue-900 mb-2">
              Struggling with Forward Head Posture or Neck Pain?
            </h3>
            <p className="text-blue-800 mb-3">
              If you've developed forward head posture, visible neck hump, or chronic pain despite practicing proper standing alignment, you may need clinical treatment protocols. See our comprehensive medical guide.
            </p>
            <a 
              href="https://www.neckhump.com" 
              className="text-blue-600 font-medium hover:underline"
              target="_blank"
              rel="noopener"
            >
              View Clinical Treatment Guide at NeckHump.com →
            </a>
          </div>

          <KeyTakeaways takeaways={keyTakeaways} />

          <div className="prose prose-lg max-w-none">
            
            <h2 id="what-is-good-posture">What Is Good Standing Posture?</h2>
            <p>
              Good standing posture isn't about standing like a soldier at attention—it's about balanced, neutral alignment that requires minimal muscular effort to maintain. When you stand correctly, your skeletal system does most of the work, not your muscles.
            </p>

            <p>
              From a side view, your ears, shoulders, hips, knees, and ankles should form a roughly straight vertical line. Your spine maintains its natural S-curve: slight forward curve in neck (cervical lordosis), backward curve in upper back (thoracic kyphosis), and forward curve in lower back (lumbar lordosis).
            </p>

            <p>
              Good standing posture should feel:
            </p>
            <ul>
              <li><strong>Balanced:</strong> Weight evenly distributed, not leaning forward or back</li>
              <li><strong>Relaxed:</strong> Muscles engaged but not tense or straining</li>
              <li><strong>Tall:</strong> Spine elongated, as if string is pulling crown of head upward</li>
              <li><strong>Stable:</strong> Firmly grounded through feet, not swaying or unstable</li>
            </ul>

            <h2 id="wall-test">The Wall Test (Check Your Alignment)</h2>
            <p>
              The wall test is the quickest way to check your standing posture. Here's how to do it:
            </p>

            <ol>
              <li>Stand with your back against a flat wall</li>
              <li>Place your heels about 6 inches from the wall base</li>
              <li>Your buttocks and shoulder blades should touch the wall</li>
              <li>Check the space behind your neck: should fit one hand (about 2 inches)</li>
              <li>Check the space behind your lower back: should fit one hand (about 2 inches)</li>
            </ol>

            <p>
              <strong>What it reveals:</strong>
            </p>
            <ul>
              <li><strong>Can't get shoulders to touch:</strong> Rounded upper back (kyphosis)</li>
              <li><strong>Large gap behind neck:</strong> Forward head posture</li>
              <li><strong>Large gap behind lower back:</strong> Excessive lower back arch (hyperlordosis)</li>
              <li><strong>No gap behind lower back:</strong> Flat back posture, lacking natural curve</li>
            </ul>

            <p>
              Perform the wall test weekly to track your posture improvements. As muscles strengthen and habits improve, you'll find this position easier to achieve and hold. For comprehensive improvement strategies, see our <a href="/how-to-improve-posture" className="text-primary-600 hover:underline">complete posture guide</a>.
            </p>

            <h2 id="perfect-position">Perfect Standing Position (Step-by-Step)</h2>
            <p>
              Follow these cues from feet up to achieve proper standing alignment:
            </p>

            <h3>1. Feet and Ankles</h3>
            <ul>
              <li>Feet hip-width apart (about 6-12 inches between heels)</li>
              <li>Toes pointing straight ahead or slightly outward (no more than 10 degrees)</li>
              <li>Weight centered over arches, not toes or heels</li>
              <li>Weight distributed 50-50 between both feet (not favoring one side)</li>
            </ul>

            <h3>2. Knees</h3>
            <ul>
              <li>Soft knees—slight bend, never locked straight</li>
              <li>Kneecaps pointing straight ahead (tracking over middle toes)</li>
              <li>No hyperextension (bending backward beyond straight)</li>
            </ul>

            <h3>3. Pelvis and Hips</h3>
            <ul>
              <li>Pelvis in neutral position (not tilted forward or backward)</li>
              <li>Hip bones level (imagine headlights pointing straight ahead)</li>
              <li>Slight engagement of lower abdominals (like bracing for gentle poke)</li>
            </ul>

            <h3>4. Spine and Core</h3>
            <ul>
              <li>Spine elongated (imagine string pulling crown of head upward)</li>
              <li>Natural curves maintained (not exaggerated or flattened)</li>
              <li>Core lightly engaged (not sucked in or pushed out)</li>
              <li>Rib cage stacked over pelvis (not thrust forward)</li>
            </ul>

            <h3>5. Shoulders and Arms</h3>
            <ul>
              <li>Shoulders back and down (not hunched or elevated toward ears)</li>
              <li>Shoulder blades gently drawn together (not squeezed)</li>
              <li>Arms hanging naturally at sides, palms facing inward</li>
              <li>Elbows soft (slight bend), not locked</li>
            </ul>

            <h3>6. Head and Neck</h3>
            <ul>
              <li>Head balanced directly over shoulders (ears over shoulders)</li>
              <li>Chin parallel to ground (not jutting forward or tilted up)</li>
              <li>Neck long, maintaining natural forward curve</li>
              <li>Gaze forward, not down at floor or up at ceiling</li>
            </ul>

            <h2 id="common-problems">Common Standing Posture Problems</h2>
            
            <h3>1. Forward Head Posture</h3>
            <p>
              <strong>What it looks like:</strong> Head juts forward, ears ahead of shoulders<br/>
              <strong>Causes:</strong> <a href="/phone-posture-tips" className="text-primary-600 hover:underline">Phone use</a>, computer work, weak neck muscles<br/>
              <strong>Fix:</strong> Chin tucks, neck stretches, <a href="/desk-ergonomics-guide" className="text-primary-600 hover:underline">monitor height adjustment</a>
            </p>

            <h3>2. Rounded Shoulders</h3>
            <p>
              <strong>What it looks like:</strong> Shoulders roll forward, upper back hunched<br/>
              <strong>Causes:</strong> Desk work, weak upper back muscles, tight chest<br/>
              <strong>Fix:</strong> Wall angels, doorway chest stretches, rows
            </p>

            <h3>3. Anterior Pelvic Tilt</h3>
            <p>
              <strong>What it looks like:</strong> Excessive lower back arch, belly protrudes<br/>
              <strong>Causes:</strong> Weak core, tight hip flexors, <a href="/sitting-posture-guide" className="text-primary-600 hover:underline">prolonged sitting</a><br/>
              <strong>Fix:</strong> Glute bridges, planks, hip flexor stretches
            </p>

            <h3>4. Locked Knees</h3>
            <p>
              <strong>What it looks like:</strong> Knees hyperextended backward<br/>
              <strong>Causes:</strong> Habit, weak glutes and hamstrings<br/>
              <strong>Fix:</strong> Conscious knee softening, strengthening exercises
            </p>

            <h3>5. Weight on One Leg</h3>
            <p>
              <strong>What it looks like:</strong> Hip shifted to side, weight favoring one leg<br/>
              <strong>Causes:</strong> Habit, muscle imbalances, carrying bags on one shoulder<br/>
              <strong>Fix:</strong> Conscious weight distribution, single-leg exercises for weaker side
            </p>

            <h2 id="long-periods">Standing for Long Periods</h2>
            <p>
              If you stand for work or extended periods, these strategies prevent fatigue and pain:
            </p>

            <h3>Use a Footrest</h3>
            <p>
              Place a small footrest (4-6 inches high) nearby. Alternate resting one foot on it every 10-15 minutes. This relieves lower back pressure and prevents fatigue.
            </p>

            <h3>Shift Your Weight</h3>
            <p>
              Consciously shift weight between feet every 10-15 minutes. Rock gently forward onto toes, then back onto heels. This maintains circulation and prevents muscle fatigue.
            </p>

            <h3>Micro-Movements</h3>
            <p>
              Do these subtle movements while standing:
            </p>
            <ul>
              <li><strong>Calf raises:</strong> Rise up on toes, hold 2 seconds, lower. 10 reps every 20 minutes</li>
              <li><strong>Ankle circles:</strong> Lift one foot slightly, rotate ankle clockwise then counterclockwise</li>
              <li><strong>Shoulder rolls:</strong> Roll shoulders backward 5 times, forward 5 times</li>
              <li><strong>Pelvic tilts:</strong> Gently tilt pelvis forward and backward, finding neutral position</li>
            </ul>

            <h3>Take Walking Breaks</h3>
            <p>
              Walk for 2-3 minutes every 30-45 minutes. Even brief walking maintains circulation better than standing still, reducing leg swelling and fatigue.
            </p>

            <h3>Supportive Footwear</h3>
            <p>
              Wear shoes with:
            </p>
            <ul>
              <li>Low heel (0.5-1.5 inches maximum)</li>
              <li>Good arch support</li>
              <li>Cushioned sole</li>
              <li>Firm heel counter (back of shoe)</li>
              <li>Room for toes to spread naturally</li>
            </ul>

            <h3>Anti-Fatigue Mat</h3>
            <p>
              If you stand in one spot (kitchen, standing desk), use an anti-fatigue mat. The cushioning reduces pressure on feet and encourages subtle micro-movements that maintain circulation.
            </p>

            <h2 id="exercises">Exercises to Improve Standing Posture</h2>
            <p>
              These exercises strengthen the muscles that support good standing posture. Do them 3-4 times weekly. For a complete daily routine, see our <a href="/daily-posture-routine" className="text-primary-600 hover:underline">10-minute posture exercise program</a>:
            </p>

            <h3>1. Single-Leg Balance (1 minute each side)</h3>
            <p>
              Stand on one foot, maintaining perfect posture. Progress by closing eyes or standing on unstable surface. Strengthens ankle stability and core engagement.
            </p>

            <h3>2. Wall Posture Hold (3 sets x 30 seconds)</h3>
            <p>
              Stand in wall test position and hold, engaging muscles to maintain proper alignment. This trains your body to recognize correct posture.
            </p>

            <h3>3. Glute Bridges (3 sets x 15 reps)</h3>
            <p>
              Strengthens glutes and hamstrings, which prevent anterior pelvic tilt and support proper hip alignment while standing.
            </p>

            <h3>4. Deadbugs (3 sets x 10 each side)</h3>
            <p>
              Strengthens core while maintaining neutral spine, directly translating to better standing posture.
            </p>

            <h3>5. Wall Angels (3 sets x 10 reps)</h3>
            <p>
              Opens chest and strengthens upper back muscles, correcting rounded shoulders and improving standing upper body posture.
            </p>

            <h2>Daily Practice Tips</h2>
            <p>
              Making good standing posture automatic requires consistent practice:
            </p>

            <ul>
              <li><strong>Mirror checks:</strong> Stand sideways to mirror while brushing teeth, check alignment</li>
              <li><strong>Photo reminders:</strong> Take weekly side-view standing photos to track improvements</li>
              <li><strong>Waiting time practice:</strong> Use time waiting (lines, elevator, microwave) to practice perfect standing</li>
              <li><strong>Phone alerts:</strong> Set 3-4 daily reminders to check standing posture</li>
              <li><strong>Before/after comparison:</strong> Notice how you feel after standing with good vs. bad posture</li>
            </ul>

            <p>
              Most people find good standing posture becomes natural within 6-8 weeks of consistent awareness and strengthening exercises.
            </p>

          </div>

          <div id="faq" className="mt-12">
            <FAQSection faqs={faqData} />
          </div>

          <div className="mt-12">
            <RelatedArticles articles={relatedArticles} />
          </div>

          <div className="mt-12">
            <NavigationPathway {...navigationPathway} />
          </div>

        </div>
      </article>
    </>
  )
}

