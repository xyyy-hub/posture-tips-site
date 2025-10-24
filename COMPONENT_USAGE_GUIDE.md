# 📚 Component Usage Guide

Quick reference for using the reusable components created for NeckHump.com

---

## 🔗 **RelatedArticles Component**

**Purpose:** Display related articles at the bottom of pages for better content discovery and internal linking.

**Location:** `/components/RelatedArticles.js`

### Usage Example:

```jsx
import RelatedArticles from '../../components/RelatedArticles'

export default function YourPage() {
  const relatedArticles = [
    {
      title: "10 Best Neck Hump Exercises",
      description: "Comprehensive exercise routine with step-by-step instructions and rep counts.",
      href: "/neck-hump-exercises",
      category: "Exercises", // Optional
      readTime: "8 min read" // Optional
    },
    {
      title: "How to Fix Posture at Home",
      description: "Complete home treatment plan for all posture types.",
      href: "/how-to-fix-posture-at-home",
      category: "Treatment",
      readTime: "12 min read"
    },
    {
      title: "Ergonomic Desk Setup Guide",
      description: "Workspace optimization to prevent poor posture.",
      href: "/desk-setup-guide",
      category: "Prevention",
      readTime: "6 min read"
    }
  ]

  return (
    <div>
      {/* Your page content */}
      
      <RelatedArticles 
        articles={relatedArticles}
        title="Related Articles" // Optional, defaults to "Related Articles"
      />
    </div>
  )
}
```

### Props:

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `articles` | Array | Yes | - | Array of article objects (see below) |
| `title` | String | No | "Related Articles" | Section heading |

### Article Object Structure:

```javascript
{
  title: string,        // Required: Article title
  description: string,  // Required: Brief description
  href: string,         // Required: Link to article
  category: string,     // Optional: Category badge (e.g., "Exercises", "Prevention")
  readTime: string      // Optional: Reading time (e.g., "5 min read")
}
```

### Best Practices:
- Include 3-5 related articles per page
- Choose articles that are complementary (not duplicative)
- Order by relevance (most related first)
- Use descriptive titles and descriptions
- Include read time to set expectations

---

## 🗺️ **NavigationPathway Component**

**Purpose:** Display a learning path that guides users from beginner to advanced content.

**Location:** `/components/NavigationPathway.js`

### Basic Usage (Default Pathway):

```jsx
import NavigationPathway from '../../components/NavigationPathway'

export default function YourPage() {
  return (
    <div>
      {/* Your page content */}
      
      <NavigationPathway currentStage="exercises" />
    </div>
  )
}
```

### Default Pathway Stages:
1. `beginner` - Understanding Your Posture
2. `exercises` - Start with Exercises
3. `environment` - Fix Your Environment
4. `maintenance` - Maintain & Prevent

### Custom Pathway Usage:

```jsx
import NavigationPathway from '../../components/NavigationPathway'

export default function YourPage() {
  const customPathway = [
    {
      stage: 'assessment',
      title: 'Self-Assessment',
      description: 'Identify your specific posture problems',
      links: [
        { href: '/posture-correction-guide', label: 'Posture Types' },
        { href: '/neck-hump-causes', label: 'Understand Causes' }
      ]
    },
    {
      stage: 'exercises',
      title: 'Daily Exercise Routine',
      description: 'Begin your correction program',
      links: [
        { href: '/neck-hump-exercises', label: 'Exercise Guide' },
        { href: '/exercise-library', label: 'Browse Exercises' }
      ]
    },
    {
      stage: 'optimization',
      title: 'Environment Optimization',
      description: 'Fix workspace and sleep setup',
      links: [
        { href: '/desk-setup-guide', label: 'Desk Setup' },
        { href: '/how-to-sleep-with-neck-hump', label: 'Sleep Position' }
      ]
    }
  ]

  return (
    <div>
      {/* Your page content */}
      
      <NavigationPathway 
        currentStage="exercises"
        pathway={customPathway}
      />
    </div>
  )
}
```

### Props:

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `currentStage` | String | Yes | - | Current stage identifier |
| `pathway` | Array | No | Default 4-stage pathway | Custom pathway definition (see below) |

### Pathway Object Structure:

```javascript
[
  {
    stage: string,        // Required: Unique stage identifier
    title: string,        // Required: Stage title
    description: string,  // Required: Stage description
    links: [              // Required: Array of links
      {
        href: string,     // Required: Link URL
        label: string     // Required: Link text
      }
    ]
  }
]
```

### Visual Indicators:
- **Current Stage:** Blue highlight, "You are here" badge
- **Completed Stages:** Green background, checkmark icon
- **Upcoming Stages:** Gray, slightly transparent

### Best Practices:
- Use 3-5 stages for clarity (not too many)
- Order stages logically (progression from beginner to advanced)
- Include 2-4 links per stage
- Make stage descriptions actionable
- Place near top of page (after intro) or bottom (before footer)

---

## 📝 **PeopleAlsoAsk Component** (Existing)

**Purpose:** Display frequently asked questions with expandable answers.

**Location:** `/components/PeopleAlsoAsk.js`

### Usage Example:

```jsx
import PeopleAlsoAsk from '../../components/PeopleAlsoAsk'

export default function YourPage() {
  const questions = [
    {
      question: "How long does it take to fix neck hump?",
      answer: "Most people see noticeable improvement in 2-4 weeks with consistent daily practice. Significant correction typically takes 6-12 weeks.",
      link: "/help/timeline-questions/how-long-until-neck-hump-improves" // Optional
    },
    {
      question: "Can neck hump be completely reversed?",
      answer: "Yes, neck hump (forward head posture) can be significantly improved or completely corrected in most cases, especially when caught early."
    }
  ]

  return (
    <div>
      {/* Your page content */}
      
      <PeopleAlsoAsk questions={questions} />
    </div>
  )
}
```

---

## 📚 **Citations Component** (Existing)

**Purpose:** Display medical references with PubMed links.

**Location:** `/components/Citations.js`

### Usage Example:

```jsx
import Citations from '../../components/Citations'

export default function YourPage() {
  const references = [
    {
      authors: "Kim SY, Koo SJ",
      year: "2016",
      title: "Effect of duration of smartphone use on muscle fatigue and pain caused by forward head posture",
      journal: "Journal of Physical Therapy Science",
      volume: "28(6)",
      pages: "1669-1672",
      url: "https://pubmed.ncbi.nlm.nih.gov/25393825/"
    },
    {
      authors: "Nejati P, Lotfian S, Moezy A, Nejati M",
      year: "2015",
      title: "The study of correlation between forward head posture and neck pain in Iranian office workers",
      journal: "International Journal of Occupational Medicine and Environmental Health",
      volume: "28(2)",
      pages: "295-303",
      url: "https://pubmed.ncbi.nlm.nih.gov/32795710/"
    }
  ]

  return (
    <div>
      {/* Your page content */}
      
      <Citations references={references} />
    </div>
  )
}
```

---

## 📊 **ComparisonTable Component** (Existing)

**Purpose:** Display comparison tables for products or exercise variations.

**Location:** `/components/ComparisonTable.js`

### Usage Example:

```jsx
import ComparisonTable from '../../components/ComparisonTable'

export default function YourPage() {
  const pillows = [
    {
      name: "Cervical Pillow A",
      Price: "$45",
      Support: "Firm",
      "Best For": "Back sleepers",
      Rating: "4.5/5"
    },
    {
      name: "Memory Foam Pillow B",
      Price: "$35",
      Support: "Medium",
      "Best For": "Side sleepers",
      Rating: "4.2/5"
    },
    {
      name: "Contour Pillow C",
      Price: "$55",
      Support: "Firm",
      "Best For": "Neck pain",
      Rating: "4.7/5"
    }
  ]

  const criteria = ["Price", "Support", "Best For", "Rating"]

  return (
    <div>
      {/* Your page content */}
      
      <ComparisonTable 
        title="Pillow Comparison"
        items={pillows}
        criteria={criteria}
      />
    </div>
  )
}
```

---

## 👤 **AuthorReviewer Component** (Existing)

**Purpose:** Display medical reviewer information and disclaimers.

**Location:** `/components/AuthorReviewer.js`

### Usage Example:

```jsx
import AuthorReviewer from '../../components/AuthorReviewer'

export default function YourPage() {
  return (
    <div>
      {/* Your page content */}
      
      <AuthorReviewer 
        reviewer="Dr. Sarah Johnson, DPT"
        lastUpdated="October 2025"
        showDisclaimer={true}
      />
    </div>
  )
}
```

---

## 📋 **HelpArticle Component** (Existing)

**Purpose:** Reusable template for help center articles.

**Location:** `/components/HelpArticle.js`

### Usage Example:

```jsx
import HelpArticle from '../../../components/HelpArticle'

export default function YourHelpPage() {
  return (
    <HelpArticle
      title="Can I do chin tucks with herniated disc?"
      description="Safety guidelines for neck exercises with disc issues"
      shortAnswer="Consult your doctor first. If approved, start with very gentle chin tucks (1-2mm movement) and stop if you feel pain, numbness, or tingling."
      
      keyConsiderations={[
        {
          title: "Doctor Clearance Required",
          content: "Always get medical clearance before starting exercises with a herniated disc."
        },
        {
          title: "Start Extremely Gentle",
          content: "Begin with minimal range of motion (1-2mm) and progress very slowly."
        }
      ]}
      
      stepByStep={[
        {
          title: "Modified Chin Tuck Technique",
          steps: [
            "Sit in a supportive chair with good back support",
            "Keep your head in a neutral position",
            "Very gently tuck your chin (1-2mm movement only)",
            "Hold for 2-3 seconds, then release",
            "Repeat 5 times, once daily to start"
          ]
        }
      ]}
      
      whenToSeeDoctor={[
        "Sharp or shooting pain",
        "Numbness or tingling in arms/hands",
        "Weakness in arms",
        "Increased pain after exercises"
      ]}
      
      relatedQuestions={[
        {
          title: "Neck exercises safe after whiplash?",
          href: "/help/exercises-safety/neck-exercises-after-whiplash"
        },
        {
          title: "Forward head posture with arthritis?",
          href: "/help/exercises-safety/forward-head-posture-with-arthritis"
        }
      ]}
      
      faqData={[
        {
          question: "How long until I can do full chin tucks?",
          answer: "Progress very gradually over 4-8 weeks, increasing range of motion by 1-2mm per week only if pain-free."
        }
      ]}
      
      lastUpdated="October 2025"
      reviewer="Dr. Sarah Johnson, DPT"
      reviewerCredentials="Physical Therapist, 10+ years experience"
    />
  )
}
```

---

## 🎨 **Component Styling Notes**

All components use **Tailwind CSS** with consistent color schemes:

### Color Palette:
- **Emerald** (`emerald-50`, `emerald-400`, `emerald-800`) - Short answers
- **Blue** (`blue-50`, `blue-400`, `blue-600`) - Key takeaways, primary actions
- **Yellow** (`yellow-50`, `yellow-400`) - Warnings, when to see doctor
- **Gray** (`gray-50`, `gray-200`, `gray-600`) - Neutral, backgrounds
- **Green** (`green-50`, `green-500`) - Success, completed stages
- **Red** (`red-50`, `red-600`) - Errors, danger (use sparingly)

### Typography:
- **H1:** `text-4xl font-bold text-gray-900`
- **H2:** `text-3xl font-bold text-gray-900`
- **H3:** `text-2xl font-bold text-gray-900`
- **Body:** `text-gray-700`
- **Small:** `text-sm text-gray-600`

### Spacing:
- **Section margins:** `mb-12` (bottom margin)
- **Card padding:** `p-6`
- **Grid gaps:** `gap-4` or `gap-6`

---

## 🚀 **Quick Start Checklist**

When creating a new content page:

1. ✅ Add **Short Answer Block** (emerald box)
2. ✅ Add **Key Takeaways** (blue box)
3. ✅ Add **PeopleAlsoAsk** component (5 questions)
4. ✅ Add **RelatedArticles** component (3-5 articles)
5. ✅ Add **AuthorReviewer** component
6. ✅ Add **structured data** (Article, HowTo, or Course schema)
7. ✅ Add **canonical URL** in metadata
8. ✅ Add page to **sitemap.js**
9. ✅ Test on mobile and desktop
10. ✅ Validate structured data with Google's tool

---

## 📞 **Support**

For questions about component usage:
- Check component source code in `/components/` folder
- Review existing page implementations for examples
- All components are simple and self-contained (no complex state management)
- Components follow standard Next.js/React patterns

---

**Last Updated:** October 11, 2025

