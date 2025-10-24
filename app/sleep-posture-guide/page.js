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
  title: 'Sleep Posture Guide: Best Positions for Spine Health',
  description: 'Discover the best sleeping positions for posture and spine health. Covers back, side, and stomach sleeping with pillow and mattress recommendations.',
  alternates: {
    canonical: '/sleep-posture-guide'
  },
  openGraph: {
    title: 'Sleep Posture Guide: Best Positions for Spine Health',
    description: 'Learn the best sleeping positions for posture with pillow recommendations.',
    url: 'https://www.posturetips.com/sleep-posture-guide',
    type: 'article',
  },
}

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Guides', href: '/' },
  { label: 'Sleep Posture Guide' }
]

const tocSections = [
  { id: 'short-answer', title: 'Short Answer' },
  { id: 'key-takeaways', title: 'Key Takeaways' },
  { id: 'why-matters', title: 'Why Sleep Posture Matters' },
  { id: 'back-sleeping', title: 'Best: Back Sleeping' },
  { id: 'side-sleeping', title: 'Second Best: Side Sleeping' },
  { id: 'stomach-sleeping', title: 'Worst: Stomach Sleeping' },
  { id: 'pillow-guide', title: 'Pillow Selection Guide' },
  { id: 'mattress-guide', title: 'Mattress Firmness' },
  { id: 'faq', title: 'Frequently Asked Questions' }
]

const keyTakeaways = [
  "Back sleeping is ideal for spine alignment but only works for 40% of people",
  "Side sleeping is excellent IF you use a pillow between your knees for hip alignment",
  "Stomach sleeping forces neck rotation and spine extension—switch positions if possible",
  "Your pillow height matters more than pillow brand: neck should stay neutral, not bent",
  "You'll naturally shift positions 10-30 times per night—that's healthy and normal"
]

const faqData = [
  {
    question: "What is the best sleeping position for posture?",
    answer: "Back sleeping is best for posture, keeping spine in neutral alignment. Place a pillow under your knees to reduce lower back strain. Side sleeping is second-best when done correctly with pillow between knees. Stomach sleeping is worst, forcing neck rotation and spine extension."
  },
  {
    question: "Is it bad to sleep on your stomach?",
    answer: "Yes, stomach sleeping is the worst position for posture. It forces your neck to rotate 90 degrees for hours and extends your spine unnaturally. If you must stomach-sleep, use a very thin pillow (or none) and place a pillow under your hips to reduce back strain."
  },
  {
    question: "What type of pillow is best for posture?",
    answer: "The best pillow maintains your neck's natural curve without bending it up or down. For back sleepers: medium-loft pillow (4-5 inches). For side sleepers: high-loft pillow (5-7 inches) to fill shoulder-to-head gap. Stomach sleepers: thin pillow (2-3 inches) or none."
  },
  {
    question: "How firm should my mattress be for good posture?",
    answer: "Medium-firm mattresses (5-7 on 1-10 scale) support best posture for most people. They support spine alignment while cushioning pressure points. Side sleepers may prefer slightly softer (4-6), back sleepers medium-firm (5-7), stomach sleepers firmer (6-8). Test before buying."
  },
  {
    question: "Should I sleep with a pillow under my knees?",
    answer: "Yes, if you're a back sleeper. A pillow under your knees reduces lower back strain by preventing excessive arch. It maintains your spine's natural curves and reduces pressure on lumbar discs. Side sleepers should place pillow between knees instead."
  },
  {
    question: "Can sleeping position cause neck pain?",
    answer: "Yes, improper sleeping position is a common cause of neck pain. Pillows that are too high or too low bend your neck unnaturally for 6-8 hours. Stomach sleeping forces neck rotation. Wrong pillow height is the #1 sleep posture problem causing morning neck stiffness and pain."
  },
  {
    question: "How can I stop sleeping on my stomach?",
    answer: "To transition away from stomach sleeping: (1) Use body pillow to hug while side-sleeping, (2) Place pillow behind back to prevent rolling over, (3) Start night on side, accept you'll shift to stomach initially, (4) Gradually increase side-sleeping duration over 2-3 weeks."
  },
  {
    question: "Does sleeping without a pillow help posture?",
    answer: "Only if you're a stomach sleeper. For back and side sleepers, no pillow causes neck extension (head tilts back) for hours, straining muscles and ligaments. Proper pillow height maintains neutral neck alignment. Zero pillows is better than wrong pillow, but correct pillow is best."
  },
  {
    question: "What about sleeping in a recliner?",
    answer: "Sleeping in a recliner can be okay short-term (recovery from injury) but isn't ideal long-term for posture. It typically puts hips and knees in prolonged flexion, can cause hip flexor tightness, and may not support spine curves optimally. Flat bed sleeping is better for posture."
  },
  {
    question: "Can poor sleep posture cause permanent damage?",
    answer: "While poor sleep posture can cause chronic muscle imbalances, stiffness, and pain, permanent structural damage is rare from sleep position alone. Most problems are reversible with corrected sleep setup. However, years of poor sleep posture combined with bad daytime posture can contribute to degenerative changes."
  }
]

const relatedArticles = [
  {
    title: 'How to Improve Your Posture',
    description: 'Complete guide covering sitting, standing, and daily habits.',
    href: '/how-to-improve-posture'
  },
  {
    title: 'Daily 10-Minute Posture Routine',
    description: 'Exercises to strengthen postural muscles for better sleep comfort.',
    href: '/daily-posture-routine'
  },
  {
    title: 'Standing Posture Guide',
    description: 'Learn proper daytime standing alignment.',
    href: '/standing-posture-guide'
  }
]

const navigationPathway = {
  prev: {
    title: 'Standing Posture Guide',
    href: '/standing-posture-guide'
  },
  next: {
    title: 'Daily 10-Minute Posture Routine',
    href: '/daily-posture-routine'
  }
}

const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.posturetips.com/sleep-posture-guide#article",
      "headline": "Sleep Posture Guide: Best Positions for Spine Health",
      "description": "Discover the best sleeping positions for posture and spine health. Covers back, side, and stomach sleeping with pillow and mattress recommendations.",
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
        "@id": "https://www.posturetips.com/sleep-posture-guide"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.posturetips.com/sleep-posture-guide#breadcrumb",
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
          "name": "Sleep Posture Guide"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.posturetips.com/sleep-posture-guide#faq",
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

export default function SleepPostureGuide() {
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
              Sleep Posture for Spine Health: Complete Guide
            </h1>
            
            <SimpleAuthor 
              authorName="PostureTips Team"
              authorTitle="Sleep Health Specialists"
              lastUpdated="2025-10-24"
            />
          </header>

          <div className="hidden xl:block fixed left-8 top-32 w-64">
            <TableOfContents sections={tocSections} />
          </div>

          <ShortAnswer>
            The best sleeping positions for posture are on your back (with pillow under knees) or on your side (with pillow between knees). Both keep your spine aligned naturally. Avoid stomach sleeping as it strains your neck and twists your spine.
          </ShortAnswer>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
            <h3 className="font-semibold text-blue-900 mb-2">
              Neck Hump Making Sleep Uncomfortable?
            </h3>
            <p className="text-blue-800 mb-3">
              If you have a visible neck hump or severe forward head posture that makes finding comfortable sleep positions difficult, you may need specialized sleeping guidance and pillow selection. See our clinical sleep guide.
            </p>
            <a 
              href="https://www.neckhump.com/how-to-sleep-with-neck-hump" 
              className="text-blue-600 font-medium hover:underline"
              target="_blank"
              rel="noopener"
            >
              View Neck Hump Sleep Guide at NeckHump.com →
            </a>
          </div>

          <KeyTakeaways takeaways={keyTakeaways} />

          <div className="prose prose-lg max-w-none">
            
            <h2 id="why-matters">Why Sleep Posture Matters</h2>
            <p>
              You spend 6-8 hours sleeping each night—that's one-third of your life. Your sleeping position directly affects spine alignment, muscle tension, and how you feel when you wake up.
            </p>

            <p>
              Poor sleep posture causes:
            </p>
            <ul>
              <li>Morning neck stiffness and pain</li>
              <li>Lower back discomfort that improves after getting up and moving</li>
              <li>Shoulder pain (especially side sleepers with wrong pillow height)</li>
              <li>Headaches from muscle tension</li>
              <li>Numbness or tingling in arms/hands from nerve compression</li>
            </ul>

            <p>
              Good sleep posture, combined with proper pillow and mattress support, allows your muscles to fully relax and your spine to maintain its natural curves throughout the night.
            </p>

            <h2 id="back-sleeping">Best Sleeping Position: On Your Back</h2>
            <p>
              Back sleeping is the gold standard for posture. It keeps your spine in neutral alignment with even weight distribution and no twisting.
            </p>

            <h3>Why Back Sleeping Is Best</h3>
            <ul>
              <li>Maintains natural spine curves (neck, upper back, lower back)</li>
              <li>Even weight distribution across entire back surface</li>
              <li>No neck rotation or twisting</li>
              <li>Reduces pressure on joints</li>
              <li>Minimizes facial wrinkles (bonus benefit)</li>
            </ul>

            <h3>How to Sleep on Your Back Correctly</h3>
            <ol>
              <li><strong>Head pillow:</strong> Use medium-loft pillow (4-5 inches) that supports your neck's natural forward curve without pushing head too far forward</li>
              <li><strong>Under knees:</strong> Place pillow under knees to reduce lower back strain and prevent excessive lumbar arch</li>
              <li><strong>Arms position:</strong> Rest arms at sides or on stomach—wherever comfortable</li>
              <li><strong>Feet:</strong> Let feet fall naturally outward (slightly external rotation is normal)</li>
            </ol>

            <h3>Back Sleeping Challenges</h3>
            <p>
              <strong>Reality check:</strong> Only about 40% of people can comfortably sleep on their back. Common issues:
            </p>
            <ul>
              <li><strong>Snoring/sleep apnea:</strong> Back sleeping worsens these conditions as tongue falls back</li>
              <li><strong>Lower back pain:</strong> Some people find back sleeping uncomfortable despite pillow under knees</li>
              <li><strong>Restless sleep:</strong> Some people naturally prefer side sleeping for comfort</li>
            </ul>

            <p>
              If back sleeping causes problems or feels uncomfortable after 2-3 weeks of trying, side sleeping is an excellent alternative.
            </p>

            <h2 id="side-sleeping">Second Best: Side Sleeping</h2>
            <p>
              Side sleeping is the most popular position (60% of people) and excellent for posture when done correctly with proper pillow support.
            </p>

            <h3>Why Side Sleeping Works</h3>
            <ul>
              <li>Maintains neutral spine alignment when pillow height is correct</li>
              <li>Reduces snoring and sleep apnea symptoms</li>
              <li>Comfortable for most people</li>
              <li>Good during pregnancy (left side recommended)</li>
            </ul>

            <h3>How to Sleep on Your Side Correctly</h3>
            <ol>
              <li><strong>Head pillow:</strong> Use high-loft pillow (5-7 inches) that fills the gap from shoulder to head, keeping neck neutral—not bent up or down</li>
              <li><strong>Between knees:</strong> CRITICAL—place pillow between knees to keep hips aligned and prevent lower back twisting</li>
              <li><strong>Body position:</strong> Slight fetal position is fine (knees slightly bent) but don't curl too tightly</li>
              <li><strong>Arm position:</strong> Bottom arm forward, top arm resting on side or hugging body pillow</li>
            </ol>

            <h3>Common Side Sleeping Mistakes</h3>
            <ul>
              <li><strong>Pillow too low:</strong> Neck bends down toward mattress, straining neck muscles</li>
              <li><strong>Pillow too high:</strong> Neck bends up toward ceiling, straining opposite side</li>
              <li><strong>No pillow between knees:</strong> Top leg falls forward, twisting lower back and hips</li>
              <li><strong>Bottom arm under pillow:</strong> Compresses shoulder, can cause numbness in arm/hand</li>
              <li><strong>Curling too tightly:</strong> Excessive fetal position can restrict breathing and round upper back</li>
            </ul>

            <h3>Which Side Is Better?</h3>
            <p>
              <strong>For most people:</strong> Either side is fine. Switch sides periodically to prevent muscle imbalances.<br/>
              <strong>During pregnancy:</strong> Left side is recommended (improves blood flow to baby).<br/>
              <strong>For acid reflux:</strong> Left side may reduce symptoms.<br/>
              <strong>After shoulder injury:</strong> Sleep on uninjured side.
            </p>

            <h2 id="stomach-sleeping">Worst Position: Stomach Sleeping</h2>
            <p>
              Stomach sleeping is problematic for posture. It forces your neck to rotate 90 degrees for hours and extends your spine unnaturally.
            </p>

            <h3>Why Stomach Sleeping Is Problematic</h3>
            <ul>
              <li><strong>Neck rotation:</strong> Must turn head to breathe, straining neck muscles and joints for 6-8 hours</li>
              <li><strong>Spine extension:</strong> Lower back arches excessively, compressing lumbar discs</li>
              <li><strong>Shoulder stress:</strong> Arms overhead position can impinge shoulder</li>
              <li><strong>Face pressure:</strong> Increases facial wrinkles over time</li>
            </ul>

            <h3>If You Must Stomach Sleep</h3>
            <p>
              Many stomach sleepers find it very difficult to change positions. If you can't switch:
            </p>
            <ol>
              <li><strong>Use thin pillow or no pillow:</strong> Reduces neck extension</li>
              <li><strong>Place pillow under hips/stomach:</strong> Reduces lower back arch</li>
              <li><strong>Alternate which side head turns:</strong> Switch neck rotation direction periodically</li>
              <li><strong>Stretch in morning:</strong> Do cat-cow stretches and neck rotations upon waking</li>
            </ol>

            <h3>How to Transition Away from Stomach Sleeping</h3>
            <p>
              Changing sleep positions takes 2-4 weeks of consistent effort:
            </p>
            <ol>
              <li><strong>Start on side:</strong> Begin night side-sleeping with body pillow to hug</li>
              <li><strong>Barrier pillows:</strong> Place pillow behind back to prevent rolling to stomach</li>
              <li><strong>Accept gradual change:</strong> You'll likely roll to stomach initially—that's normal</li>
              <li><strong>Track progress:</strong> Note how many hours you stay on side before rolling (will gradually increase)</li>
              <li><strong>Morning assessment:</strong> Notice if you wake with less neck stiffness as side-sleeping time increases</li>
            </ol>

            <h2 id="pillow-guide">Pillow Selection Guide</h2>
            <p>
              Pillow height (loft) matters more than pillow brand or fill material. Your pillow should maintain neutral neck alignment.
            </p>

            <h3>Pillow Height by Sleeping Position</h3>
            <ul>
              <li><strong>Back sleepers:</strong> Medium loft (4-5 inches compressed). Should support neck curve without pushing head too far forward</li>
              <li><strong>Side sleepers:</strong> High loft (5-7 inches compressed). Should fill shoulder-to-head gap, keeping neck straight</li>
              <li><strong>Stomach sleepers:</strong> Low loft (2-3 inches) or no pillow. Minimizes neck extension</li>
            </ul>

            <h3>How to Test Pillow Height</h3>
            <p>
              Lie in your usual sleep position and have someone take a side-view photo. Your neck should form a straight line with your spine—not bent up toward ceiling or down toward bed.
            </p>

            <p>
              <strong>Too high:</strong> Neck bends upward, chin toward chest<br/>
              <strong>Too low:</strong> Neck bends downward, head tilts back<br/>
              <strong>Just right:</strong> Neck forms straight line with spine
            </p>

            <h3>Pillow Materials: Pros and Cons</h3>
            <ul>
              <li><strong>Memory foam:</strong> Conforms to shape, maintains loft, but can sleep hot. Good for back/side sleepers</li>
              <li><strong>Down/feathers:</strong> Soft, moldable, but loses loft over time. Requires fluffing. Good for any position</li>
              <li><strong>Latex:</strong> Supportive, breathable, durable. Good for side sleepers needing high loft</li>
              <li><strong>Polyester fill:</strong> Budget-friendly but loses support quickly. Replace every 6-12 months</li>
            </ul>

            <h3>When to Replace Your Pillow</h3>
            <p>
              Replace pillows every 1-2 years (down/polyester) or 3-5 years (memory foam/latex). Test: fold pillow in half—if it doesn't spring back, it's dead and no longer providing proper support.
            </p>

            <h2 id="mattress-guide">Mattress Firmness for Posture</h2>
            <p>
              Medium-firm mattresses (5-7 on 1-10 firmness scale) support best posture for most people by balancing support and pressure relief.
            </p>

            <h3>Firmness by Sleeping Position</h3>
            <ul>
              <li><strong>Back sleepers:</strong> Medium-firm (5-7). Supports lumbar curve while cushioning shoulders and hips</li>
              <li><strong>Side sleepers:</strong> Medium to medium-soft (4-6). Cushions shoulder and hip pressure points while supporting spine</li>
              <li><strong>Stomach sleepers:</strong> Firm (6-8). Prevents hips from sinking, reducing lower back arch</li>
            </ul>

            <h3>Firmness by Body Weight</h3>
            <ul>
              <li><strong>Under 130 lbs:</strong> Softer mattresses (3-5) prevent pressure points</li>
              <li><strong>130-230 lbs:</strong> Medium-firm (5-7) provides balance for most people</li>
              <li><strong>Over 230 lbs:</strong> Firmer mattresses (6-8) prevent excessive sinking</li>
            </ul>

            <h3>Signs Your Mattress Is Wrong</h3>
            <ul>
              <li>Wake with back pain that improves after getting up and moving</li>
              <li>Feel pressure points (shoulders, hips) when lying down</li>
              <li>Notice visible sagging or body impressions in mattress</li>
              <li>Mattress is over 7-10 years old</li>
              <li>Sleep better in hotels or other beds than your own</li>
            </ul>

            <h2>Sleep Posture Setup Checklist</h2>
            <p>
              Use this checklist to optimize your sleep setup:
            </p>

            <ul>
              <li>□ Mattress is medium-firm and under 7-10 years old</li>
              <li>□ Pillow height matches your sleeping position (see guide above)</li>
              <li>□ Pillow under knees (back sleepers) or between knees (side sleepers)</li>
              <li>□ Neck forms straight line with spine when lying down (have someone check)</li>
              <li>□ No morning neck stiffness or back pain</li>
              <li>□ Replace pillows every 1-2 years</li>
              <li>□ Room is dark, cool (65-68°F), and quiet</li>
            </ul>

            <h2>Natural Position Changes Are Normal</h2>
            <p>
              You'll naturally shift positions 10-30 times per night. This is healthy—it prevents pressure points and maintains circulation. Don't stress about staying in one position all night.
            </p>

            <p>
              Focus on: (1) Starting the night in a good position, (2) Using proper pillow support, (3) Waking without pain or stiffness.
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

