// Model layer: strongly-typed portfolio content (the "M" in MVC).
// Inline text supports *italic* and **bold** markers.
import yanaGirl from "../lib/yana-girl.jpg";
import yanaPhoto from "../lib/yana-photo.jpg";
export const PALETTE = {
    petal: "#feb3c4",
    olive: "#a2ab38",
    cocoa: "#46232a",
    cream: "#f6ead8",
};
export const folders = [
    {
        id: "who",
        index: "01",
        title: "WHO I AM",
        tagline: "A mind drawn to problems, a heart grounded in purpose.",
        color: PALETTE.petal,
        ink: PALETTE.cocoa,
        photos: [
            { src: yanaGirl, alt: "Illustrated portrait taken from pinterest, not me", fit: "cover" },
            { src: yanaPhoto, alt: "ME standing on a pup oval", fit: "cover" },,
        ],
        blocks: [
            {
                kind: "paragraph",
                text: "I have always been fascinated by the possibility of making things better. Not necessarily by reinventing everything, but by looking at what already exists, understanding how it works, and asking the question: *How can this be done more effectively?* That question has shaped the way I learn, the projects I pursue, and the responsibilities I choose to take on.",
            },
            {
                kind: "paragraph",
                text: "I am a Computer Science student with a growing interest in data analytics, software development, and project management. I find fulfillment in the process of turning abstract ideas into tangible solutions, whether that means developing an application, making sense of data, designing a more intuitive system, or organizing a team around a shared goal. For me, technology is more than a collection of tools and programming languages. It is a way of understanding problems, challenging existing approaches, and creating possibilities that did not exist before.",
            },
            {
                kind: "paragraph",
                text: "What distinguishes the way I approach my work is my appreciation for both logic and people. I value precision, structure, and efficiency, but I also recognize that the best solutions are not always the most complicated ones. Sometimes, the most meaningful innovation is a system that saves someone time, a process that removes unnecessary difficulty, or a tool that makes information easier to understand. I want to create things that work well not only in theory, but also in the hands of the people who depend on them.",
            },
            {
                kind: "paragraph",
                text: "Outside the technical aspects of my education, leadership has become an important part of my growth. Through student leadership and academic coordination, I have learned to take initiative, navigate different perspectives, and approach responsibility with intention. These experiences have taught me that leadership is not simply about directing people or making decisions. It is about being dependable, recognizing what needs to be done, and helping others move toward a common objective. I have learned to balance decisiveness with understanding, and ambition with accountability.",
            },
            {
                kind: "paragraph",
                text: "I am still discovering the full extent of what I can do, and I see that as one of the most exciting parts of my journey. I approach every new challenge as an opportunity to become more capable, more thoughtful, and more deliberate in the way I work. I do not believe growth requires having everything figured out. It requires the discipline to keep learning, the humility to recognize what can be improved, and the courage to take on responsibilities that push you beyond what you already know.",
            },
            {
                kind: "paragraph",
                text: "Ultimately, I want to build a career where technical competence meets meaningful contribution. I want to work on problems worth solving, collaborate with people who challenge the way I think, and develop solutions that make a genuine difference. I aspire to be someone who can understand the bigger picture without overlooking the smallest details, lead with conviction without losing empathy, and pursue excellence without forgetting why the work matters in the first place.",
            },
            {
                kind: "paragraph",
                text: "I am building more than a collection of skills. I am building the judgment, discipline, and perspective to use them well.",
            },
            { kind: "statement", text: "I believe in thinking critically, working intentionally, and creating with purpose." },
        ],
    },
    {
        id: "skills",
        index: "02",
        title: "SKILLS",
        tagline: "Turning ideas into structured, functional solutions.",
        color: PALETTE.olive,
        ink: PALETTE.cocoa,
        photos: [],
        blocks: [
            {
                kind: "paragraph",
                text: "My technical foundation is built around a combination of programming, analytical thinking, and an interest in how technology can be applied to practical problems. As I continue to develop my capabilities in Computer Science, I aim to understand not only the mechanics of building software, but also the reasoning behind the decisions that make a solution effective.",
            },
            {
                kind: "paragraph",
                text: "I am familiar with several programming languages and web technologies, each offering a different way to approach a problem. Working with these tools has helped me appreciate that good development is not simply about writing code that runs. It is about understanding requirements, breaking complex challenges into manageable components, considering different approaches, and producing results that are clear, maintainable, and useful.",
            },
            {
                kind: "features",
                layout: "grid",
                items: [
                    {
                        title: "Web Development",
                        tags: "HTML · CSS · JavaScript",
                        body: [
                            "With HTML, CSS, and JavaScript, I explore how structure, presentation, and interactivity come together to create meaningful digital experiences. I value interfaces that feel intuitive and purposeful, where the design supports the user's goals rather than getting in the way. I am interested in building web experiences that communicate clearly, organize information effectively, and make technology more approachable.",
                        ],
                    },
                    {
                        title: "Data Analytics",
                        tags: "Python · R",
                        body: [
                            "Through Python and R, I am developing my ability to work with data, identify patterns, and translate information into insights that can support better decisions. I am particularly interested in the relationship between data and practical outcomes: how raw information can become understandable, how patterns can reveal opportunities for improvement, and how analytical thinking can help organizations make more informed choices.",
                        ],
                    },
                    {
                        title: "Programming and Problem-Solving",
                        tags: "Java · Algorithms",
                        body: [
                            "My experience with Java has strengthened my understanding of programming fundamentals and structured problem-solving. I enjoy exploring how algorithms, logic, and computational thinking can be used to address real-world challenges. I approach programming as an iterative process of reasoning, testing, and refinement, recognizing that effective solutions often emerge through careful analysis rather than the first idea that comes to mind.",
                        ],
                    },
                    {
                        title: "Project Management",
                        tags: "Planning · Coordination",
                        body: [
                            "Beyond writing code, I value the discipline required to bring an idea to completion. My interest in project management reflects my appreciation for planning, coordination, clear objectives, and purposeful execution. I understand that even a promising technical solution requires thoughtful organization, realistic expectations, and collaboration to move from concept to implementation.",
                        ],
                    },
                ],
            },
            {
                kind: "credentials",
                heading: "Certifications & Professional Development",
                intro: "I believe that learning should extend beyond the classroom. Each certification I pursue represents another step in broadening my perspective, strengthening my foundation, and exploring how my technical knowledge can translate into professional value.",
                items: [
                    {
                        issuer: "ASK LEX PH",
                        title: "Certified Data Analytics Associate",
                        note: "Reflects my commitment to developing analytical capabilities and understanding how data can be used to derive meaningful insights.",
                    },
                    {
                        issuer: "ASK LEX PH",
                        title: "Project Management Fundamentals",
                        note: "Supports my interest in structured planning, coordination, and the processes involved in moving projects toward their objectives.",
                    },
                    {
                        issuer: "Hedera",
                        title: "Certified Developer Associate",
                        note: "Represents my exploration of developer concepts within the Hedera ecosystem and my willingness to expand my technical knowledge into emerging areas of technology.",
                    },
                ],
                outro: "I view these credentials not as endpoints, but as milestones in an ongoing process of learning. My goal is to keep strengthening the connection between what I know, what I can build, and the value I can contribute.",
            },
        ],
    },
    {
        id: "experience",
        index: "03",
        title: "EXPERIENCE",
        tagline: "Learning by building, leading, and solving real problems.",
        color: PALETTE.cocoa,
        ink: PALETTE.petal,
        photos: [],
        blocks: [
            {
                kind: "paragraph",
                text: "I believe the most valuable learning happens when knowledge is put to work. Academic projects have given me opportunities to apply computational concepts to practical scenarios, while leadership responsibilities have challenged me to think beyond individual tasks and consider the systems, people, and decisions that influence an outcome.",
            },
            {
                kind: "paragraph",
                text: "Across these experiences, I have developed an appreciation for approaching challenges from multiple perspectives. A problem may appear technical at first, but solving it effectively often requires understanding the user's needs, examining the available information, organizing the process, and evaluating whether the resulting solution genuinely addresses the issue. This is the perspective I bring to the projects I pursue.",
            },
            {
                kind: "features",
                layout: "stack",
                items: [
                    {
                        title: "CARGO OPTIMA",
                        tags: "Dynamic Programming · Algorithm Design · Optimization",
                        summary: "Implementing the 0/1 Knapsack Algorithm with Dynamic Programming for Fuel Efficiency in Cargo Allocation in Transportation Vehicles.",
                        body: [
                            "CARGO OPTIMA explores how algorithmic thinking can be applied to transportation and resource optimization. At its core is a familiar but meaningful challenge: how can a limited cargo capacity be used as effectively as possible?",
                            "The project applies the 0/1 Knapsack Algorithm using dynamic programming to examine cargo allocation as an optimization problem. Each item presents a decision, and every decision contributes to a larger objective under a defined capacity constraint. Rather than relying on arbitrary selection, the algorithm provides a structured way to evaluate possible combinations and determine an allocation that optimizes the chosen objective.",
                            "What interests me about this project is the way an abstract computational concept can be connected to a practical operational challenge. Dynamic programming demonstrates how a complex decision can be broken down into smaller, reusable subproblems, while the transportation context gives that logic a tangible purpose.",
                            "CARGO OPTIMA reflects my interest in computational efficiency, algorithm design, and the application of computer science to real-world decision-making. It is an exercise in looking beyond the code itself and understanding how the right computational approach can support better use of limited resources.",
                        ],
                    },
                    {
                        title: "SAAN — Smart Algorithm for Appetite Navigation",
                        tags: "Decision-Support Systems · User Preferences · Application Design",
                        summary: "A preference-driven decision-support application for streamlined food and restaurant selection.",
                        body: [
                            "Choosing where to eat is an everyday decision, yet it can become surprisingly time-consuming when preferences, available options, and individual circumstances all come into play. SAAN was conceptualized around this simple observation: even familiar decisions can benefit from a more structured and personalized approach.",
                            "SAAN, or Smart Algorithm for Appetite Navigation, is a decision-support application designed to streamline food and restaurant selection through user preferences. Its central idea is to make the process more manageable by helping users navigate their options in a way that better reflects what they want.",
                            "The project represents my interest in building technology around actual human behavior. Instead of treating an application as a purely technical product, I approach it as a tool intended to address a recognizable user need. This means considering how preferences can inform recommendations, how information can be organized to simplify decisions, and how an application can reduce friction in an otherwise ordinary experience.",
                            "SAAN also reflects my interest in the intersection of analytical thinking and user-centered design. A useful decision-support tool should do more than present choices; it should help make those choices easier to evaluate. Through this project, I explore how algorithmic thinking can contribute to more intuitive, preference-driven experiences.",
                        ],
                    },
                    {
                        title: "Student Leadership & Academic Coordination",
                        tags: "Leadership · Communication · Organization · Collaborative Problem-Solving",
                        body: [
                            "My experience extends beyond technical development into the responsibilities of student leadership. Serving in leadership roles has given me opportunities to coordinate academic matters, communicate with classmates, organize information, and help ensure that shared responsibilities are handled systematically.",
                            "These responsibilities have taught me to recognize that effective coordination requires more than keeping track of tasks. It requires anticipating needs, communicating expectations clearly, maintaining accountability, and understanding how individual actions affect a larger group. Whether organizing academic information, coordinating with representatives, or helping address concerns, I have learned the importance of being both proactive and dependable.",
                            "Leadership has also strengthened my ability to approach situations with balance. Decisions often involve competing priorities, different perspectives, and practical constraints. Navigating these situations has encouraged me to think critically, listen carefully, and act with a clear sense of responsibility.",
                            "Perhaps most importantly, these experiences have shaped my understanding of service. I believe leadership should create value beyond the person holding the position. It should make processes clearer, collaboration easier, and shared goals more achievable. This principle carries over into the way I approach technical work: I want the things I build and the responsibilities I take on to leave a meaningful, positive impact.",
                        ],
                    },
                ],
            },
            { kind: "heading", text: "Where I Am Headed" },
            {
                kind: "paragraph",
                text: "Every project, certification, and responsibility contributes to a larger journey of discovering where my strengths can create the most value. I am particularly interested in opportunities that combine technology, data, and structured problem-solving, where I can continue developing my technical capabilities while learning how organizations and people operate.",
            },
            {
                kind: "paragraph",
                text: "I want to become someone who can move comfortably between understanding a problem, analyzing the available information, coordinating the work required, and helping deliver a thoughtful solution. I am drawn to work that rewards curiosity, encourages continuous improvement, and values both measurable results and the people those results serve.",
            },
            {
                kind: "paragraph",
                text: "I know that professional growth is built through experience, not intention alone. There is still much to learn, and I welcome the opportunity to be challenged, to collaborate with others, and to refine my approach through meaningful work.",
            },
            { kind: "paragraph", text: "For now, I continue to build, explore, and improve, one problem at a time." },
            {
                kind: "statement",
                text: "I am not simply interested in what technology can do. I am interested in what we can do with it, and who can benefit when we do it well.",
            },
        ],
    },
];
