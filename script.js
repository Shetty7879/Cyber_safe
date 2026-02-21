/**
 * CyberSafe Schools
 * Global JavaScript Logic
 * Contains: Localization, Theme Toggling, Greeting, Password Analyzer, Mobile Menu
 */

const translations = {
  en: {
    navHome: "Home",
    navLearn: "Learn",
    navQuiz: "Quiz",
    navScenarios: "Scenarios",
    navHelp: "Help",
    themeToggle: "Toggle Theme",
    greetMorning: "Good Morning",
    greetAfternoon: "Good Afternoon",
    greetEvening: "Good Evening",
    heroTitle: "Play. Learn. Stay Safe.",
    heroSubtitle: "To educate students, parents, teachers, and the general public about cybersecurity safety, online threats, and official cybercrime reporting resources.",
    heroBtnStart: "Start Learning",
    heroBtnQuiz: "Take Quick Quiz",
    pwdTitle: "Password Safety & Account Protection",
    pwdDesc: "Learn how to secure your digital identity with strong passwords and 2FA.",
    learnMore: "Learn more",
    phishTitle: "Phishing Awareness",
    phishDesc: "Recognize deceptive emails and messages aiming to steal your data.",
    bullTitle: "Cyberbullying Prevention",
    bullDesc: "Understand how to stop online harassment and promote a safe digital space.",
    privTitle: "Privacy Protection",
    privDesc: "Manage your personal information safely across social media and websites.",
    helpTitle: "Official Cyber Crime Help & Support (India)",
    helpSub: "OFFICIAL GOVERNMENT OF INDIA RESOURCES",
    helpCall: "Call 1930 (India)",
    helpWarn: "For physical emergencies, contact local emergency services (Police: 100).",
    helpDisc: "CyberSafe India is an independent public awareness initiative. It is not affiliated with or endorsed by the Government of India or any law enforcement agency.",
    footerCopy: "CyberSafe India &copy; 2026",
    footerInitiative: "Independent cybersecurity awareness initiative for the public in India",
    pwdPh: "Enter your password...",
    pwdDisclaimer: "Passwords are checked locally in your browser and are not stored or transmitted.",

    // Learn Page
    learn_hero_title: "Cybersecurity Learning Modules",
    learn_pwd_title: "🔐 Password Safety & Account Protection",
    learn_pwd_desc: "Securing your online accounts acts as the first line of defense against cybercriminals. The foundation of good digital hygiene begins with strong, unique passwords for every service.",
    learn_pro_tip: "Pro Tip:",
    learn_pwd_tip: "Use a combination of at least 12 characters including uppercase, lowercase, numbers, and symbols. Avoid common words or personal information like birthdates.",
    learn_best_practices: "Best Practices: Do’s and Don’ts",
    learn_do: "DO:",
    learn_dont: "DON’T:",
    pwd_do_1: "Use passwords with at least 8–12 characters",
    pwd_do_2: "Combine uppercase, lowercase, numbers, and symbols",
    pwd_do_3: "Use a unique password for each account",
    pwd_do_4: "Enable two-factor authentication where available",
    pwd_do_5: "Change passwords if a breach is suspected",
    pwd_dont_1: "Reuse the same password across multiple sites",
    pwd_dont_2: "Share passwords or OTPs with anyone",
    pwd_dont_3: "Use personal details (name, DOB, phone number)",
    pwd_dont_4: "Save passwords in plain text",
    pwd_dont_5: "Click suspicious links asking to reset passwords",
    pwd_enter: "Enter password",
    pwd_suggest: "Suggest Strong Password",

    learn_phish_title: "🎣 Phishing Awareness",
    learn_phish_desc: "Phishing is a deceptive practice where cybercriminals send fraudulent messages (via email, SMS, or social media) designed to trick you into revealing sensitive information or installing malware.",
    learn_red_flag: "Red Flag:",
    learn_phish_tip: "The message creates a false sense of urgency (e.g., \"Your account will be suspended in 24 hours!\").",
    learn_best_practices_2: "Best Practices: Do’s and Don’ts",
    learn_do_2: "DO:",
    learn_dont_2: "DON’T:",
    phish_do_1: "Verify the sender’s email address carefully",
    phish_do_2: "Check website URLs before clicking links",
    phish_do_3: "Use official apps or websites for logins",
    phish_do_4: "Enable email spam filters",
    phish_do_5: "Report phishing attempts to official platforms",
    phish_dont_1: "Click on suspicious links or attachments",
    phish_dont_2: "Share OTPs, passwords, or bank details",
    phish_dont_3: "Trust urgent messages asking for immediate action",
    phish_dont_4: "Download files from unknown sources",
    phish_dont_5: "Assume messages are genuine because they look official",

    learn_bull_title: "🛡️ Cyberbullying Prevention",
    learn_bull_desc: "Cyberbullying includes sending, posting, or sharing negative, harmful, false, or mean content about someone else. It can happen on social media, messaging apps, gaming platforms, and mobile phones.",
    learn_action_plan: "Action Plan:",
    learn_bull_tip: "STOP, BLOCK, and TELL. Do not retaliate. Block the offender and report the behavior to the platform or a trusted adult.",
    learn_best_practices_3: "Best Practices: Do’s and Don’ts",
    learn_do_3: "DO:",
    learn_dont_3: "DON’T:",
    bull_do_1: "Block and report cyberbullying behavior",
    bull_do_2: "Save evidence such as messages or screenshots",
    bull_do_3: "Speak to a trusted adult, teacher, or parent",
    bull_do_4: "Use platform reporting tools responsibly",
    bull_do_5: "Support others who are being bullied online",
    bull_dont_1: "Respond angrily or engage with bullies",
    bull_dont_2: "Share hurtful messages or images",
    bull_dont_3: "Participate in online harassment",
    bull_dont_4: "Blame yourself for cyberbullying",
    bull_dont_5: "Ignore repeated abusive behavior",

    learn_priv_title: "👁️🗨️ Privacy Protection",
    learn_priv_desc: "Your personal data is valuable. Over-sharing online can lead to identity theft, stalking, and digital impersonation.",
    learn_golden_rule: "Golden Rule:",
    learn_priv_tip: "Once something is posted online, it is almost impossible to completely remove. Think before you post.",
    learn_best_practices_4: "Best Practices: Do’s and Don’ts",
    learn_do_4: "DO:",
    learn_dont_4: "DON’T:",
    priv_do_1: "Review privacy settings on social media regularly",
    priv_do_2: "Share personal information only on trusted platforms",
    priv_do_3: "Use strong passwords and enable two-factor authentication",
    priv_do_4: "Keep software and apps updated",
    priv_do_5: "Log out from shared or public devices",
    priv_dont_1: "Share personal details like address, phone number, or ID online",
    priv_dont_2: "Accept friend requests from unknown people",
    priv_dont_3: "Allow unnecessary app permissions",
    priv_dont_4: "Post sensitive photos or documents publicly",
    priv_dont_5: "Use public Wi-Fi for sensitive transactions without protection",

    // Quiz Page Static
    quiz_title: "Cybersecurity Quick Quiz",
    quiz_completed: "Quiz Completed!",
    quiz_score: "Your Score:",
    quiz_retake: "Retake Quiz",
    quiz_current_score: "Score:",
    quiz_loading: "Loading question...",
    quiz_next: "Next Question",
    quizFeedbackCorrect: "Correct!",
    quizFeedbackIncorrect: "Incorrect",
    quizProgress: "Question {current} of {total}",

    // Scenarios Page Static
    scenario_title: "Real-Life Scenarios",
    scenario_subtitle: "Test your instincts in these common cybersecurity situations.",
    scenario_loading: "Loading scenario...",
    scenario_action: "What is your action?",
    scenario_next: "Next Scenario",
    scenario_completed: "All Scenarios Completed!",
    scenario_well_done: "Well done interpreting real-world cyber threats safely.",
    scenario_go_learn: "Go to Learn",
    scenario_restart: "Restart",
    scenarioProgress: "Scenario {current} of {total}",
    scenarioFeedbackSafe: "Safe Choice!",
    scenarioFeedbackRisky: "Risky Action!",

    // Quiz & Scenario Data Arrays
    quizData: [
      {
        q: "What is the primary purpose of a 'phishing' attack?",
        options: [
          "To test network speed.",
          "To trick people into revealing sensitive information.",
          "To update software automatically.",
          "To prevent spam emails."
        ],
        answer: 1,
        explanation: "Phishing relies on deception, often using urgent or fake institutional messages to trick victims into handing over passwords or credit card numbers."
      },
      {
        q: "Why is it important to use Two-Factor Authentication (2FA)?",
        options: [
          "It prevents people from finding your social media profile.",
          "It speeds up your internet connection.",
          "It provides a secondary layer of security if your password is stolen.",
          "It makes your battery last longer."
        ],
        answer: 2,
        explanation: "Even if a hacker gets your password, they would still need the secondary token (like an SMS code) to access your account."
      },
      {
        q: "If you receive an SMS saying you have won a lottery you didn't enter and asking for a processing fee, what should you do?",
        options: [
          "Pay the fee quickly to claim the prize.",
          "Ignore and delete the message.",
          "Reply with your bank details to speed it up.",
          "Forward it to all your friends."
        ],
        answer: 1,
        explanation: "This is a classic advance-fee scam. Never send money or details to strangers offering unverified rewards."
      },
      {
        q: "What is the safest way to handle a cyberbullying incident?",
        options: [
          "Bully them back.",
          "Post about it publicly on social media.",
          "Stop, Block, and Tell a trusted adult or authority.",
          "Delete your account entirely."
        ],
        answer: 2,
        explanation: "Do not respond to bullies. Blocking them cuts off their access to you, and reporting ensures appropriate action can be taken."
      },
      {
        q: "What is the official National Cyber Crime Helpline number in India?",
        options: ["100", "1930", "112", "108"],
        answer: 1,
        explanation: "1930 is the dedicated National Cyber Crime Helpline in India for reporting financial and other cybercrimes."
      }
    ],
    scenarioData: [
      {
        title: "The Unexpected Job Offer",
        desc: "You receive a WhatsApp message from an international number offering a 'work from home' job. They promise high returns for just 'liking YouTube videos' and ask you to join a Telegram group where you must pay a small 'registration fee' to start.",
        options: [
          "Pay the fee. It's a small investment for a high-paying job.",
          "Join the Telegram group just to see if it's real without paying.",
          "Block the number, report as spam, and ignore the offer.",
          "Share your bank details so they can directly deposit the earnings first."
        ],
        correct: 2,
        explanation: "This is a common task-based scam. Fraudsters bait victims with small initial payouts or promises, then scam them for larger amounts through 'fees'. Always block and report unsolicited job offers from unknown numbers."
      },
      {
        title: "The Overdue Electricity Bill",
        desc: "You receive an SMS urgently claiming: 'Dear customer, your electricity power will be disconnected tonight at 9:30 PM because your previous month's bill was not updated. Please call our executive on 98XXXXXX immediately.'",
        options: [
          "Call the number immediately to avoid a power cut.",
          "Click the link provided in the SMS to pay the bill.",
          "Panic and send the message to family members warning them.",
          "Ignore the message and check your official electricity provider's app or portal."
        ],
        correct: 3,
        explanation: "Legitimate electricity boards do not send threats from personal mobile numbers. Scammers use this panic tactic to trick victims into downloading screen-sharing apps or making fraudulent payments."
      },
      {
        title: "The Social Media Clone",
        desc: "You get a friend request from your best friend, even though you are already friends online. The new profile has the same picture but very few posts. Soon, this 'new profile' messages you asking for urgent money for an emergency.",
        options: [
          "Send the money quickly; it's an emergency!",
          "Accept the request and ask for their bank details.",
          "Call your friend directly on their phone to verify.",
          "Report the new account immediately without verifying."
        ],
        correct: 2,
        explanation: "Always verify out-of-character requests by contacting the person through an alternate channel (like a direct phone call). Scammers frequently clone profiles to trick the victim's friends."
      },
      {
        title: "Public Wi-Fi Connection",
        desc: "You are sitting in a coffee shop and your phone connects to an open Wi-Fi network called 'Free_Coffee_WiFi'. You need to do a quick bank transfer to pay your rent.",
        options: [
          "Do the transfer quickly before disconnecting.",
          "Use the Wi-Fi but use a VPN, or preferably disconnect and use your mobile data.",
          "Ask the barista if the network is safe, then do the transfer.",
          "Use your browser's 'Incognito' mode to do the transfer."
        ],
        correct: 1,
        explanation: "Open public Wi-Fi networks are vulnerable to 'Man-in-the-Middle' attacks. It's safer to use your own cellular data for sensitive transactions. Incognito mode does not encrypt your connection."
      }
    ]
  },
  hi: {
    navHome: "होम",
    navLearn: "सीखें",
    navQuiz: "क्विज़",
    navScenarios: "परिदृश्य",
    navHelp: "सहायता",
    themeToggle: "थीम बदलें",
    greetMorning: "शुभ प्रभात",
    greetAfternoon: "शुभ दोपहर",
    greetEvening: "शुभ संध्या",
    heroTitle: "खेलें। सीखें। सुरक्षित रहें।",
    heroSubtitle: "छात्रों, माता-पिता, शिक्षकों और आम जनता को साइबर सुरक्षा, ऑनलाइन खतरों और आधिकारिक साइबर अपराध रिपोर्टिंग संसाधनों के बारे में शिक्षित करने के लिए।",
    heroBtnStart: "सीखना शुरू करें",
    heroBtnQuiz: "क्विज़ लें",
    pwdTitle: "पासवर्ड सुरक्षा और खाता सुरक्षा",
    pwdDesc: "मजबूत पासवर्ड और 2FA के साथ अपनी डिजिटल पहचान सुरक्षित करना सीखें।",
    learnMore: "और जानें",
    phishTitle: "फ़िशिंग जागरूकता",
    phishDesc: "आपका डेटा चुराने के उद्देश्य से भ्रामक ईमेल और संदेशों को पहचानें।",
    bullTitle: "साइबरबुलिंग रोकथाम",
    bullDesc: "ऑनलाइन उत्पीड़न को रोकने और सुरक्षित डिजिटल स्पेस को बढ़ावा देने का तरीका समझें।",
    privTitle: "गोपनीयता सुरक्षा",
    privDesc: "सोशल मीडिया और वेबसाइटों पर अपनी व्यक्तिगत जानकारी को सुरक्षित रूप से प्रबंधित करें।",
    helpTitle: "आधिकारिक साइबर अपराध सहायता और समर्थन (भारत)",
    helpSub: "आधिकारिक भारत सरकार के संसाधन",
    helpCall: "1930 पर कॉल करें (भारत)",
    helpWarn: "शारीरिक आपात स्थिति के लिए, स्थानीय आपातकालीन सेवाओं (पुलिस: 100) से संपर्क करें।",
    helpDisc: "साइबरसेफ इंडिया (CyberSafe India) एक स्वतंत्र जन जागरूकता पहल है। यह भारत सरकार या किसी कानून प्रवर्तन एजेंसी से संबद्ध या समर्थित नहीं है।",
    footerCopy: "CyberSafe India &copy; 2026",
    footerInitiative: "भारत में जनता के लिए स्वतंत्र साइबर सुरक्षा जागरूकता पहल",
    pwdPh: "अपना पासवर्ड दर्ज करें...",
    pwdDisclaimer: "पासवर्ड आपके ब्राउज़र में स्थानीय रूप से जांचे जाते हैं और सहेजे या प्रेषित नहीं किए जाते हैं।",

    // Learn Page
    learn_hero_title: "साइबर सुरक्षा शिक्षण मॉड्यूल",
    learn_pwd_title: "🔐 पासवर्ड सुरक्षा और खाता सुरक्षा",
    learn_pwd_desc: "अपने ऑनलाइन खातों को सुरक्षित करना साइबर अपराधियों के खिलाफ रक्षा की पहली पंक्ति के रूप में कार्य करता है। अच्छी डिजिटल स्वच्छता की नींव हर सेवा के लिए मजबूत, अद्वितीय पासवर्ड से शुरू होती है।",
    learn_pro_tip: "प्रो टिप:",
    learn_pwd_tip: "अपरकेस, लोअरकेस, नंबर और प्रतीकों सहित कम से कम 12 वर्णों के संयोजन का उपयोग करें। सामान्य शब्दों या जन्मतिथि जैसी व्यक्तिगत जानकारी से बचें।",
    learn_best_practices: "सर्वोत्तम अभ्यास: क्या करें और क्या न करें",
    learn_do: "क्या करें:",
    learn_dont: "क्या न करें:",
    pwd_do_1: "कम से कम 8-12 वर्णों वाले पासवर्ड का उपयोग करें",
    pwd_do_2: "अपरकेस, लोअरकेस, नंबर और प्रतीकों को मिलाएं",
    pwd_do_3: "प्रत्येक खाते के लिए एक अद्वितीय पासवर्ड का उपयोग करें",
    pwd_do_4: "जहां उपलब्ध हो वहां टू-फैक्टर ऑथेंटिकेशन सक्षम करें",
    pwd_do_5: "यदि उल्लंघन का संदेह हो तो पासवर्ड बदलें",
    pwd_dont_1: "कई साइटों पर एक ही पासवर्ड का पुन: उपयोग करें",
    pwd_dont_2: "किसी के साथ पासवर्ड या ओटीपी साझा करें",
    pwd_dont_3: "व्यक्तिगत विवरण (नाम, जन्मतिथि, फोन नंबर) का उपयोग करें",
    pwd_dont_4: "पासवर्ड को सादे पाठ में सहेजें",
    pwd_dont_5: "पासवर्ड रीसेट करने के लिए कहने वाले संदिग्ध लिंक पर क्लिक करें",
    pwd_enter: "पासवर्ड दर्ज करें",
    pwd_suggest: "मजबूत पासवर्ड सुझाएं",

    learn_phish_title: "🎣 फ़िशिंग जागरूकता",
    learn_phish_desc: "फ़िशिंग एक भ्रामक प्रथा है जहां साइबर अपराधी संवेदनशील जानकारी का खुलासा करने या मैलवेयर स्थापित करने के लिए धोखा देने के लिए डिज़ाइन किए गए धोखाधड़ी संदेश (ईमेल, एसएमएस या सोशल मीडिया के माध्यम से) भेजते हैं।",
    learn_red_flag: "खतरे की निशानी:",
    learn_phish_tip: "संदेश तात्कालिकता की झूठी भावना पैदा करता है (उदा., 'आपका खाता 24 घंटे में निलंबित कर दिया जाएगा!')।",
    learn_best_practices_2: "सर्वोत्तम अभ्यास: क्या करें और क्या न करें",
    learn_do_2: "क्या करें:",
    learn_dont_2: "क्या न करें:",
    phish_do_1: "प्रेषक के ईमेल पते को ध्यान से सत्यापित करें",
    phish_do_2: "लिंक पर क्लिक करने से पहले वेबसाइट के यूआरएल की जांच करें",
    phish_do_3: "लॉगिन के लिए आधिकारिक ऐप या वेबसाइट का उपयोग करें",
    phish_do_4: "ईमेल स्पैम फ़िल्टर सक्षम करें",
    phish_do_5: "आधिकारिक प्लेटफार्मों पर फ़िशिंग प्रयासों की रिपोर्ट करें",
    phish_dont_1: "संदिग्ध लिंक या अटैचमेंट पर क्लिक करें",
    phish_dont_2: "ओटीपी, पासवर्ड या बैंक विवरण साझा करें",
    phish_dont_3: "तत्काल कार्रवाई के लिए कहने वाले तत्काल संदेशों पर भरोसा करें",
    phish_dont_4: "अज्ञात स्रोतों से फ़ाइलें डाउनलोड करें",
    phish_dont_5: "मान लें कि संदेश असली हैं क्योंकि वे आधिकारिक दिखते हैं",

    learn_bull_title: "🛡️ साइबरबुलिंग रोकथाम",
    learn_bull_desc: "साइबरबुलिंग में किसी और के बारे में नकारात्मक, हानिकारक, झूठी या मतलबी सामग्री भेजना, पोस्ट करना या साझा करना शामिल है। यह सोशल मीडिया, मैसेजिंग ऐप, गेमिंग प्लेटफॉर्म और मोबाइल फोन पर हो सकता है।",
    learn_action_plan: "कार्य योजना:",
    learn_bull_tip: "रुकें, ब्लॉक करें और बताएं। बदला न लें। अपराधी को ब्लॉक करें और प्लेटफॉर्म या किसी भरोसेमंद वयस्क को व्यवहार की रिपोर्ट करें।",
    learn_best_practices_3: "सर्वोत्तम अभ्यास: क्या करें और क्या न करें",
    learn_do_3: "क्या करें:",
    learn_dont_3: "क्या न करें:",
    bull_do_1: "साइबरबुलिंग व्यवहार को ब्लॉक करें और रिपोर्ट करें",
    bull_do_2: "संदेश या स्क्रीनशॉट जैसे साक्ष्य सहेजें",
    bull_do_3: "किसी भरोसेमंद वयस्क, शिक्षक या माता-पिता से बात करें",
    bull_do_4: "प्लेटफॉर्म रिपोर्टिंग टूल का जिम्मेदारी से उपयोग करें",
    bull_do_5: "ऑनलाइन बदमाशी करने वाले अन्य लोगों का समर्थन करें",
    bull_dont_1: "क्रोधित होकर प्रतिक्रिया दें या धमकियों से जुड़ें",
    bull_dont_2: "आहत करने वाले संदेश या चित्र साझा करें",
    bull_dont_3: "ऑनलाइन उत्पीड़न में भाग लें",
    bull_dont_4: "साइबरबुलिंग के लिए खुद को दोष दें",
    bull_dont_5: "बार-बार होने वाले अपमानजनक व्यवहार को नज़रअंदाज़ करें",

    learn_priv_title: "👁️🗨️ गोपनीयता सुरक्षा",
    learn_priv_desc: "आपका व्यक्तिगत डेटा मूल्यवान है। ऑनलाइन अधिक साझा करने से पहचान की चोरी, पीछा करना और डिजिटल प्रतिरूपण हो सकता है।",
    learn_golden_rule: "सुनहरा नियम:",
    learn_priv_tip: "एक बार ऑनलाइन कुछ पोस्ट हो जाने के बाद, इसे पूरी तरह से हटाना लगभग असंभव है। पोस्ट करने से पहले सोचें।",
    learn_best_practices_4: "सर्वोत्तम अभ्यास: क्या करें और क्या न करें",
    learn_do_4: "क्या करें:",
    learn_dont_4: "क्या न करें:",
    priv_do_1: "नियमित रूप से सोशल मीडिया पर गोपनीयता सेटिंग्स की समीक्षा करें",
    priv_do_2: "व्यक्तिगत जानकारी केवल विश्वसनीय प्लेटफॉर्म पर साझा करें",
    priv_do_3: "मजबूत पासवर्ड का उपयोग करें और टू-फैक्टर ऑथेंटिकेशन सक्षम करें",
    priv_do_4: "सॉफ़्टवेयर और ऐप्स को अपडेट रखें",
    priv_do_5: "साझा या सार्वजनिक उपकरणों से लॉग आउट करें",
    priv_dont_1: "पता, फोन नंबर या आईडी जैसे व्यक्तिगत विवरण ऑनलाइन साझा करें",
    priv_dont_2: "अज्ञात लोगों से मित्र अनुरोध स्वीकार करें",
    priv_dont_3: "अनावश्यक ऐप अनुमतियों को अनुमति दें",
    priv_dont_4: "संवेदनशील तस्वीरें या दस्तावेज़ सार्वजनिक रूप से पोस्ट करें",
    priv_dont_5: "सुरक्षा के बिना संवेदनशील लेनदेन के लिए सार्वजनिक वाई-फाई का उपयोग करें",

    // Quiz Page Static
    quiz_title: "साइबर सुरक्षा त्वरित प्रश्नोत्तरी",
    quiz_completed: "प्रश्नोत्तरी पूर्ण!",
    quiz_score: "आपका स्कोर:",
    quiz_retake: "प्रश्नोत्तरी फिर से लें",
    quiz_current_score: "स्कोर:",
    quiz_loading: "प्रश्न लोड हो रहा है...",
    quiz_next: "अगला प्रश्न",
    quizFeedbackCorrect: "सही!",
    quizFeedbackIncorrect: "ग़लत",
    quizProgress: "प्रश्न {current} का {total}",

    // Scenarios Page Static
    scenario_title: "वास्तविक जीवन के परिदृश्य",
    scenario_subtitle: "इन सामान्य साइबर सुरक्षा स्थितियों में अपनी प्रवृत्ति का परीक्षण करें।",
    scenario_loading: "परिदृश्य लोड हो रहा है...",
    scenario_action: "आपकी क्या कार्रवाई है?",
    scenario_next: "अगला परिदृश्य",
    scenario_completed: "सभी परिदृश्य पूर्ण!",
    scenario_well_done: "वास्तविक दुनिया के साइबर खतरों की सुरक्षित रूप से व्याख्या करना बहुत अच्छा लगा।",
    scenario_go_learn: "सीखने पर जाएं",
    scenario_restart: "पुनर्प्रारंभ करें",
    scenarioProgress: "परिदृश्य {current} का {total}",
    scenarioFeedbackSafe: "सुरक्षित विकल्प!",
    scenarioFeedbackRisky: "जोखिम भरा कदम!",

    // Quiz Data Array
    quizData: [
      {
        q: "'फ़िशिंग' हमले का प्राथमिक उद्देश्य क्या है?",
        options: [
          "नेटवर्क स्पीड का परीक्षण करने के लिए।",
          "संवेदनशील जानकारी प्रकट करने के लिए लोगों को धोखा देने के लिए।",
          "सॉफ़्टवेयर को स्वचालित रूप से अपडेट करने के लिए।",
          "स्पैम ईमेल को रोकने के लिए।"
        ],
        answer: 1,
        explanation: "फ़िशिंग धोखे पर निर्भर करता है, अक्सर पीड़ितों को पासवर्ड या क्रेडिट कार्ड नंबर सौंपने के लिए धोखा देने के लिए तत्काल या नकली संस्थागत संदेशों का उपयोग किया जाता है।"
      },
      {
        q: "टू-फैक्टर ऑथेंटिकेशन (2FA) का उपयोग करना क्यों महत्वपूर्ण है?",
        options: [
          "यह लोगों को आपका सोशल मीडिया प्रोफ़ाइल ढूंढने से रोकता है।",
          "यह आपके इंटरनेट कनेक्शन को गति देता है।",
          "यदि आपका पासवर्ड चोरी हो जाता है तो यह सुरक्षा की एक द्वितीयक परत प्रदान करता है।",
          "यह आपकी बैटरी को अधिक समय तक चलाता है।"
        ],
        answer: 2,
        explanation: "भले ही किसी हैकर को आपका पासवर्ड मिल जाए, फिर भी उन्हें आपके खाते तक पहुंचने के लिए द्वितीयक टोकन (जैसे एसएमएस कोड) की आवश्यकता होगी।"
      },
      {
        q: "यदि आपको एक एसएमएस मिलता है जिसमें कहा गया है कि आपने वह लॉटरी जीती है जिसमें आपने प्रवेश नहीं किया था और प्रसंस्करण शुल्क मांगा जा रहा है, तो आपको क्या करना चाहिए?",
        options: [
          "इनाम का दावा करने के लिए तुरंत शुल्क का भुगतान करें।",
          "संदेश को अनदेखा करें और हटा दें।",
          "इसे गति देने के लिए अपने बैंक विवरण के साथ उत्तर दें।",
          "इसे अपने सभी दोस्तों को अग्रेषित करें।"
        ],
        answer: 1,
        explanation: "यह एक क्लासिक अग्रिम-शुल्क घोटाला है। सत्यापित न किए गए पुरस्कारों की पेशकश करने वाले अजनबियों को कभी भी पैसा या विवरण न भेजें।"
      },
      {
        q: "साइबरबुलिंग की घटना से निपटने का सबसे सुरक्षित तरीका क्या है?",
        options: [
          "उन्हें वापस धमकाएं।",
          "इसके बारे में सार्वजनिक रूप से सोशल मीडिया पर पोस्ट करें।",
          "रुकें, ब्लॉक करें और किसी भरोसेमंद वयस्क या प्राधिकारी को बताएं।",
          "अपना खाता पूरी तरह से हटा दें।"
        ],
        answer: 2,
        explanation: "बदमाशी का जवाब न दें। उन्हें ब्लॉक करने से आप तक उनकी पहुंच कट जाती है, और रिपोर्टिंग सुनिश्चित करती है कि उचित कार्रवाई की जा सकती है।"
      },
      {
        q: "भारत में आधिकारिक राष्ट्रीय साइबर अपराध हेल्पलाइन नंबर क्या है?",
        options: ["100", "1930", "112", "108"],
        answer: 1,
        explanation: "वित्तीय और अन्य साइबर अपराधों की रिपोर्टिंग के लिए भारत में 1930 एक समर्पित राष्ट्रीय साइबर अपराध हेल्पलाइन है।"
      }
    ],

    // Scenario Data Array
    scenarioData: [
      {
        title: "अप्रत्याशित नौकरी का प्रस्ताव",
        desc: "आपको 'वर्क फ्रॉम होम' नौकरी की पेशकश करने वाले अंतर्राष्ट्रीय नंबर से एक व्हाट्सएप संदेश प्राप्त होता है। वे सिर्फ 'यूट्यूब वीडियो पसंद करने' के लिए उच्च रिटर्न का वादा करते हैं और आपको एक टेलीग्राम समूह में शामिल होने के लिए कहते हैं जहां शुरू करने के लिए आपको थोड़ा 'पंजीकरण शुल्क' का भुगतान करना होगा।",
        options: [
          "शुल्क का भुगतान करें। उच्च भुगतान वाली नौकरी के लिए यह एक छोटा निवेश है।",
          "बिना भुगतान किए यह देखने के लिए टेलीग्राम समूह में शामिल हों कि क्या यह वास्तविक है।",
          "नंबर ब्लॉक करें, स्पैम के रूप में रिपोर्ट करें और प्रस्ताव को अनदेखा करें।",
          "अपना बैंक विवरण साझा करें ताकि वे पहले कमाई सीधे जमा कर सकें।"
        ],
        correct: 2,
        explanation: "यह एक आम कार्य-आधारित घोटाला है। धोखेबाज पीड़ितों को छोटे प्रारंभिक भुगतान या वादों के साथ लालच देते हैं, फिर 'शुल्क' के माध्यम से उनसे बड़ी रकम ठगते हैं। हमेशा अज्ञात नंबरों से अवांछित नौकरी प्रस्तावों को ब्लॉक करें और रिपोर्ट करें।"
      },
      {
        title: "अतिदेय बिजली बिल",
        desc: "आपको तत्काल दावा करने वाला एक एसएमएस प्राप्त होता है: 'प्रिय ग्राहक, आज रात 9:30 बजे आपकी बिजली काट दी जाएगी क्योंकि आपका पिछले महीने का बिल अपडेट नहीं किया गया था। कृपया तुरंत 98XXXXXX पर हमारे कार्यकारी को कॉल करें।'",
        options: [
          "बिजली कटौती से बचने के लिए तुरंत नंबर पर कॉल करें।",
          "बिल का भुगतान करने के लिए एसएमएस में दिए गए लिंक पर क्लिक करें।",
          "घबराएं और परिवार के सदस्यों को चेतावनी देते हुए संदेश भेजें।",
          "संदेश को अनदेखा करें और अपने आधिकारिक बिजली प्रदाता के ऐप या पोर्टल की जांच करें।"
        ],
        correct: 3,
        explanation: "वैध बिजली बोर्ड व्यक्तिगत मोबाइल नंबरों से धमकी नहीं भेजते हैं। स्कैमर्स पीड़ितों को स्क्रीन-शेयरिंग ऐप डाउनलोड करने या धोखाधड़ी से भुगतान करने के लिए धोखा देने के लिए इस पैनिक रणनीति का उपयोग करते हैं।"
      },
      {
        title: "सोशल मीडिया क्लोन",
        desc: "ऑनलाइन पहले से ही मित्र होने के बावजूद, आपको अपने सबसे अच्छे दोस्त का मित्र अनुरोध प्राप्त होता है। नई प्रोफाइल में एक जैसी तस्वीर है लेकिन बहुत कम पोस्ट हैं। जल्द ही, यह 'नया प्रोफाइल' आपको आपात स्थिति के लिए तत्काल पैसे मांगने का संदेश देता है।",
        options: [
          "जल्दी पैसे भेजें; यह एक आपात स्थिति है!",
          "अनुरोध स्वीकार करें और उनके बैंक विवरण मांगें।",
          "सत्यापित करने के लिए सीधे अपने मित्र को उनके फ़ोन पर कॉल करें।",
          "बिना सत्यापन के नए खाते की तुरंत रिपोर्ट करें।"
        ],
        correct: 2,
        explanation: "हमेशा व्यक्ति से वैकल्पिक चैनल (जैसे सीधे फोन कॉल) के माध्यम से संपर्क करके बेमेल अनुरोधों को सत्यापित करें। स्कैमर्स अक्सर पीड़ित के दोस्तों को धोखा देने के लिए प्रोफाइल क्लोन करते हैं।"
      },
      {
        title: "सार्वजनिक वाई-फाई कनेक्शन",
        desc: "आप एक कॉफी शॉप में बैठे हैं और आपका फोन 'Free_Coffee_WiFi' नामक ओपन वाई-फाई नेटवर्क से कनेक्ट हो जाता है। आपको अपना किराया देने के लिए एक त्वरित बैंक हस्तांतरण करने की आवश्यकता है।",
        options: [
          "डिस्कनेक्ट करने से पहले जल्दी से ट्रांसफर करें।",
          "वाई-फाई का उपयोग करें लेकिन वीपीएन का उपयोग करें, या अधिमानतः डिस्कनेक्ट करें और अपने मोबाइल डेटा का उपयोग करें।",
          "बरिस्ता से पूछें कि क्या नेटवर्क सुरक्षित है, फिर ट्रांसफर करें।",
          "ट्रांसफर करने के लिए अपने ब्राउज़र के 'गुप्त' (Incognito) मोड का उपयोग करें।"
        ],
        correct: 1,
        explanation: "खुले सार्वजनिक वाई-फाई नेटवर्क 'मैन-इन-द-मिडिल' हमलों के प्रति संवेदनशील होते हैं। संवेदनशील लेनदेन के लिए अपने स्वयं के सेलुलर डेटा का उपयोग करना अधिक सुरक्षित है। गुप्त मोड आपके कनेक्शन को एन्क्रिप्ट नहीं करता है।"
      }
    ]
  },
  kn: {
    navHome: "ಮುಖಪುಟ",
    navLearn: "ಕಲಿಯಿರಿ",
    navQuiz: "ರಸಪ್ರಶ್ನೆ",
    navScenarios: "ಸನ್ನಿವೇಶಗಳು",
    navHelp: "ಸಹಾಯ",
    themeToggle: "ಥೀಮ್ ಬದಲಾಯಿಸಿ",
    greetMorning: "ಶುಭೋದಯ",
    greetAfternoon: "ಶುಭ ಮಧ್ಯಾಹ್ನ",
    greetEvening: "ಶುಭ ಸಂಜೆ",
    heroTitle: "ಆಟವಾಡಿ. ಕಲಿಯಿರಿ. ಸುರಕ್ಷಿತವಾಗಿರಿ.",
    heroSubtitle: "ವಿದ್ಯಾರ್ಥಿಗಳು, ಪೋಷಕರು, ಶಿಕ್ಷಕರು ಮತ್ತು ಸಾರ್ವಜನಿಕರಿಗೆ ಸೈಬರ್ ಸುರಕ್ಷತೆ, ಆನ್‌ಲೈನ್ ಬೆದರಿಕೆಗಳು ಮತ್ತು ಅಧಿಕೃತ ಸೈಬರ್ ಅಪರಾಧ ವರದಿ ಮಾಡುವ ಸಂಪನ್ಮೂಲಗಳ ಬಗ್ಗೆ ಶಿಕ್ಷಣ ನೀಡಲು.",
    heroBtnStart: "ಕಲಿಯಲು ಪ್ರಾರಂಭಿಸಿ",
    heroBtnQuiz: "ರಸಪ್ರಶ್ನೆ ತೆಗೆದುಕೊಳ್ಳಿ",
    pwdTitle: "ಪಾಸ್‌ವರ್ಡ್ ಸುರಕ್ಷತೆ ಮತ್ತು ಖಾತೆ ರಕ್ಷಣೆ",
    pwdDesc: "ಬಲವಾದ ಪಾಸ್‌ವರ್ಡ್‌ಗಳು ಮತ್ತು 2FA ಯೊಂದಿಗೆ ನಿಮ್ಮ ಡಿಜಿಟಲ್ ಗುರುತನ್ನು ಹೇಗೆ ಸುರಕ್ಷಿತಗೊಳಿಸುವುದು ಎಂದು ತಿಳಿಯಿರಿ.",
    learnMore: "ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ",
    phishTitle: "ಫಿಶಿಂಗ್ ಅರಿವು",
    phishDesc: "ನಿಮ್ಮ ಡೇಟಾವನ್ನು ಕದಿಯುವ ಉದ್ದೇಶದಿಂದ ಮೋಸಗೊಳಿಸುವ ಇಮೇಲ್‌ಗಳು ಮತ್ತು ಸಂದೇಶಗಳನ್ನು ಗುರುತಿಸಿ.",
    bullTitle: "ಸೈಬರ್ ಬೆದರಿಕೆ ತಡೆಗಟ್ಟುವಿಕೆ",
    bullDesc: "ಆನ್‌ಲೈನ್ ಕಿರುಕುಳವನ್ನು ನಿಲ್ಲಿಸುವುದು ಮತ್ತು ಸುರಕ್ಷಿತ ಡಿಜಿಟಲ್ ಜಾಗವನ್ನು ಹೇಗೆ ಉತ್ತೇಜಿಸುವುದು ಎಂಬುದನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.",
    privTitle: "ಗೌಪ್ಯತೆ ರಕ್ಷಣೆ",
    privDesc: "ಸಾಮಾಜಿಕ ಮಾಧ್ಯಮ ಮತ್ತು ವೆಬ್‌ಸೈಟ್‌ಗಳಾದ್ಯಂತ ನಿಮ್ಮ ವೈಯಕ್ತಿಕ ಮಾಹಿತಿಯನ್ನು ಸುರಕ್ಷಿತವಾಗಿ ನಿರ್ವಹಿಸಿ.",
    helpTitle: "ಅಧಿಕೃತ ಸೈಬರ್ ಕ್ರೈಮ್ ಸಹಾಯ ಮತ್ತು ಬೆಂಬಲ (ಭಾರತ)",
    helpSub: "ಭಾರತ ಸರ್ಕಾರದ ಅಧಿಕೃತ ಸಂಪನ್ಮೂಲಗಳು",
    helpCall: "ಕರೆ ಮಾಡಿ 1930 (ಭಾರತ)",
    helpWarn: "ಭೌತಿಕ ತುರ್ತು ಪರಿಸ್ಥಿತಿಗಳಿಗಾಗಿ, ಸ್ಥಳೀಯ ತುರ್ತು ಸೇವೆಗಳನ್ನು ಸಂಪರ್ಕಿಸಿ (ಪೊಲೀಸ್: 100).",
    helpDisc: "ಸೈಬರ್‌ಸೇಫ್ ಇಂಡಿಯಾ (CyberSafe India) ಒಂದು ಸ್ವತಂತ್ರ ಸಾರ್ವಜನಿಕ ಜಾಗೃತಿ ಉಪಕ್ರಮವಾಗಿದೆ. ಇದು ಭಾರತ ಸರ್ಕಾರ ಅಥವಾ ಯಾವುದೇ ಕಾನೂನು ಜಾರಿ ಸಂಸ್ಥೆಯೊಂದಿಗೆ ಸಂಯೋಜಿತವಾಗಿಲ್ಲ ಅಥವಾ ಅನುಮೋದಿಸಲ್ಪಟ್ಟಿಲ್ಲ.",
    footerCopy: "CyberSafe India &copy; 2026",
    footerInitiative: "ಭಾರತದಲ್ಲಿ ಸಾರ್ವಜನಿಕರಿಗಾಗಿ ಸ್ವತಂತ್ರ ಸೈಬರ್ ಸುರಕ್ಷತಾ ಜಾಗೃತಿ ಉಪಕ್ರಮ",
    pwdPh: "ನಿಮ್ಮ ಪಾಸ್‌ವರ್ಡ್ ನಮೂದಿಸಿ...",
    pwdDisclaimer: "ಪಾಸ್‌ವರ್ಡ್‌ಗಳನ್ನು ನಿಮ್ಮ ಬ್ರೌಸರ್‌ನಲ್ಲಿ ಸ್ಥಳೀಯವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗುತ್ತದೆ ಮತ್ತು ಅವುಗಳನ್ನು ಸಂಗ್ರಹಿಸಲಾಗುವುದಿಲ್ಲ ಅಥವಾ ರವಾನಿಸಲಾಗುವುದಿಲ್ಲ.",

    // Learn Page
    learn_hero_title: "ಸೈಬರ್ ಸುರಕ್ಷತೆ ಕಲಿಕಾ ಮಾಡ್ಯೂಲ್‌ಗಳು",
    learn_pwd_title: "🔐 ಪಾಸ್‌ವರ್ಡ್ ಸುರಕ್ಷತೆ ಮತ್ತು ಖಾತೆ ರಕ್ಷಣೆ",
    learn_pwd_desc: "ನಿಮ್ಮ ಆನ್‌ಲೈನ್ ಖಾತೆಗಳನ್ನು ಭದ್ರಪಡಿಸುವುದು ಸೈಬರ್ ಅಪರಾಧಿಗಳ ವಿರುದ್ಧ ರಕ್ಷಣೆಯ ಮೊದಲ ಸಾಲಿನ ಕೆಲಸ ಮಾಡುತ್ತದೆ. ಪ್ರತಿಯೊಂದು ಸೇವೆಗೂ ಬಲವಾದ, ವಿಶಿಷ್ಟವಾದ ಪಾಸ್‌ವರ್ಡ್‌ಗಳೊಂದಿಗೆ ಉತ್ತಮ ಡಿಜಿಟಲ್ ನೈರ್ಮಲ್ಯದ ಅಡಿಪಾಯ ಪ್ರಾರಂಭವಾಗುತ್ತದೆ.",
    learn_pro_tip: "ಪ್ರೊ ಸಲಹೆ:",
    learn_pwd_tip: "ದೊಡ್ಡಕ್ಷರ, ಸಣ್ಣಕ್ಷರ, ಸಂಖ್ಯೆಗಳು ಮತ್ತು ಚಿಹ್ನೆಗಳನ್ನು ಒಳಗೊಂಡಂತೆ ಕನಿಷ್ಠ 12 ಅಕ್ಷರಗಳ ಸಂಯೋಜನೆಯನ್ನು ಬಳಸಿ. ಸಾಮಾನ್ಯ ಪದಗಳು ಅಥವಾ ಜನ್ಮ ದಿನಾಂಕದಂತಹ ವೈಯಕ್ತಿಕ ಮಾಹಿತಿಯನ್ನು ತಪ್ಪಿಸಿ.",
    learn_best_practices: "ಉತ್ತಮ ಅಭ್ಯಾಸಗಳು: ಮಾಡಬೇಕಾದದ್ದು ಮತ್ತು ಮಾಡಬಾರದ್ದು",
    learn_do: "ಮಾಡಿ:",
    learn_dont: "ಮಾಡಬೇಡಿ:",
    pwd_do_1: "ಕನಿಷ್ಠ 8-12 ಅಕ್ಷರಗಳನ್ನು ಹೊಂದಿರುವ ಪಾಸ್‌ವರ್ಡ್‌ಗಳನ್ನು ಬಳಸಿ",
    pwd_do_2: "ದೊಡ್ಡಕ್ಷರ, ಸಣ್ಣಕ್ಷರ, ಸಂಖ್ಯೆಗಳು ಮತ್ತು ಚಿಹ್ನೆಗಳನ್ನು ಸಂಯೋಜಿಸಿ",
    pwd_do_3: "ಪ್ರತಿ ಖಾತೆಗೂ ವಿಶಿಷ್ಟವಾದ ಪಾಸ್‌ವರ್ಡ್ ಬಳಸಿ",
    pwd_do_4: "ಲಭ್ಯವಿರುವಲ್ಲಿ ಟು-ಫ್ಯಾಕ್ಟರ್ ಆಥೆಂಟಿಕೇಶನ್ ಅನ್ನು ಸಕ್ರಿಯಗೊಳಿಸಿ",
    pwd_do_5: "ಉಲ್ಲಂಘನೆಯ ಶಂಕೆಯಿದ್ದರೆ ಪಾಸ್‌ವರ್ಡ್‌ಗಳನ್ನು ಬದಲಾಯಿಸಿ",
    pwd_dont_1: "ಬಹು ಸೈಟ್‌ಗಳಲ್ಲಿ ಒಂದೇ ಪಾಸ್‌ವರ್ಡ್ ಅನ್ನು ಮರುಬಳಕೆ ಮಾಡಿ",
    pwd_dont_2: "ಯಾರೊಂದಿಗೂ ಪಾಸ್‌ವರ್ಡ್‌ಗಳು ಅಥವಾ OTP ಗಳನ್ನು ಹಂಚಿಕೊಳ್ಳಿ",
    pwd_dont_3: "ವೈಯಕ್ತಿಕ ವಿವರಗಳನ್ನು (ಹೆಸರು, DOB, ಫೋನ್ ಸಂಖ್ಯೆ) ಬಳಸಿ",
    pwd_dont_4: "ಪಾಸ್‌ವರ್ಡ್‌ಗಳನ್ನು ಸರಳ ಪಠ್ಯದಲ್ಲಿ ಉಳಿಸಿ",
    pwd_dont_5: "ಪಾಸ್‌ವರ್ಡ್‌ಗಳನ್ನು ಮರುಹೊಂದಿಸಲು ಕೇಳುವ ಅನುಮಾನಾಸ್ಪದ ಲಿಂಕ್‌ಗಳನ್ನು ಕ್ಲಿಕ್ ಮಾಡಿ",
    pwd_enter: "ಪಾಸ್‌ವರ್ಡ್ ನಮೂದಿಸಿ",
    pwd_suggest: "ಬಲವಾದ ಪಾಸ್‌ವರ್ಡ್ ಅನ್ನು ಸೂಚಿಸಿ",

    learn_phish_title: "🎣 ಫಿಶಿಂಗ್ ಅರಿವು",
    learn_phish_desc: "ಫಿಶಿಂಗ್ ಎನ್ನುವುದು ಸೈಬರ್ ಅಪರಾಧಿಗಳು ನಿಮ್ಮ ಸೂಕ್ಷ್ಮ ಮಾಹಿತಿಯನ್ನು ಬಹಿರಂಗಪಡಿಸಲು ಅಥವಾ ಮಾಲ್‌ವೇರ್ ಅನ್ನು ಸ್ಥಾಪಿಸಲು ನಿಮ್ಮನ್ನು ಮೋಸಗೊಳಿಸಲು ವಿನ್ಯಾಸಗೊಳಿಸಲಾದ ಮೋಸದ ಸಂದೇಶಗಳನ್ನು (ಇಮೇಲ್, SMS ಅಥವಾ ಸಾಮಾಜಿಕ ಮಾಧ್ಯಮದ ಮೂಲಕ) ಕಳುಹಿಸುವ ಒಂದು ಮೋಸದ ಅಭ್ಯಾಸವಾಗಿದೆ.",
    learn_red_flag: "ರೆಡ್ ಫ್ಲ್ಯಾಗ್:",
    learn_phish_tip: "ಸಂದೇಶವು ತುರ್ತು ಪರಿಸ್ಥಿತಿಯ ಸುಳ್ಳು ಪ್ರಜ್ಞೆಯನ್ನು ಸೃಷ್ಟಿಸುತ್ತದೆ (ಉದಾ., 'ನಿಮ್ಮ ಖಾತೆಯನ್ನು 24 ಗಂಟೆಗಳಲ್ಲಿ ಅಮಾನತುಗೊಳಿಸಲಾಗುತ್ತದೆ!').",
    learn_best_practices_2: "ಉತ್ತಮ ಅಭ್ಯಾಸಗಳು: ಮಾಡಬೇಕಾದದ್ದು ಮತ್ತು ಮಾಡಬಾರದ್ದು",
    learn_do_2: "ಮಾಡಿ:",
    learn_dont_2: "ಮಾಡಬೇಡಿ:",
    phish_do_1: "ಕಳುಹಿಸುವವರ ಇಮೇಲ್ ವಿಳಾಸವನ್ನು ಎಚ್ಚರಿಕೆಯಿಂದ ಪರಿಶೀಲಿಸಿ",
    phish_do_2: "ಲಿಂಕ್‌ಗಳನ್ನು ಕ್ಲಿಕ್ ಮಾಡುವ ಮೊದಲು ವೆಬ್‌ಸೈಟ್ URL ಗಳನ್ನು ಪರಿಶೀಲಿಸಿ",
    phish_do_3: "ಲಾಗಿನ್‌ಗಳಿಗಾಗಿ ಅಧಿಕೃತ ಅಪ್ಲಿಕೇಶನ್‌ಗಳು ಅಥವಾ ವೆಬ್‌ಸೈಟ್‌ಗಳನ್ನು ಬಳಸಿ",
    phish_do_4: "ಇಮೇಲ್ ಸ್ಪ್ಯಾಮ್ ಫಿಲ್ಟರ್‌ಗಳನ್ನು ಸಕ್ರಿಯಗೊಳಿಸಿ",
    phish_do_5: "ಅಧಿಕೃತ ಪ್ಲಾಟ್‌ಫಾರ್ಮ್‌ಗಳಿಗೆ ಫಿಶಿಂಗ್ ಪ್ರಯತ್ನಗಳನ್ನು ವರದಿ ಮಾಡಿ",
    phish_dont_1: "ಅನುಮಾನಾಸ್ಪದ ಲಿಂಕ್‌ಗಳು ಅಥವಾ ಲಗತ್ತುಗಳನ್ನು ಕ್ಲಿಕ್ ಮಾಡಿ",
    phish_dont_2: "OTP, ಪಾಸ್‌ವರ್ಡ್‌ಗಳು ಅಥವಾ ಬ್ಯಾಂಕ್ ವಿವರಗಳನ್ನು ಹಂಚಿಕೊಳ್ಳಿ",
    phish_dont_3: "ತಕ್ಷಣದ ಕ್ರಮಕ್ಕೆ ಒತ್ತಾಯಿಸುವ ತುರ್ತು ಸಂದೇಶಗಳನ್ನು ನಂಬಿ",
    phish_dont_4: "ಅಜ್ಞಾತ ಮೂಲಗಳಿಂದ ಫೈಲ್‌ಗಳನ್ನು ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ",
    phish_dont_5: "ಸಂದೇಶಗಳು ಅಧಿಕೃತವಾಗಿ ಕಾಣುವುದರಿಂದ ಅವು ನಿಜವೆಂದು ಭಾವಿಸಿ",

    learn_bull_title: "🛡️ ಸೈಬರ್ ಬೆದರಿಕೆ ತಡೆಗಟ್ಟುವಿಕೆ",
    learn_bull_desc: "ಸೈಬರ್‌ಬಲ್ಲಿಂಗ್ ಬೇರೆಯವರ ಬಗ್ಗೆ ನಕಾರಾತ್ಮಕ, ಹಾನಿಕಾರಕ, ಸುಳ್ಳು ಅಥವಾ ಕೆಟ್ಟ ವಿಷಯವನ್ನು ಕಳುಹಿಸುವುದು, ಪೋಸ್ಟ್ ಮಾಡುವುದು ಅಥವಾ ಹಂಚಿಕೊಳ್ಳುವುದನ್ನು ಒಳಗೊಂಡಿರುತ್ತದೆ. ಇದು ಸಾಮಾಜಿಕ ಮಾಧ್ಯಮ, ಸಂದೇಶ ಕಳುಹಿಸುವ ಅಪ್ಲಿಕೇಶನ್‌ಗಳು, ಗೇಮಿಂಗ್ ಪ್ಲಾಟ್‌ಫಾರ್ಮ್‌ಗಳು ಮತ್ತು ಮೊಬೈಲ್ ಫೋನ್‌ಗಳಲ್ಲಿ ಸಂಭವಿಸಬಹುದು.",
    learn_action_plan: "ಕ್ರಿಯಾ ಯೋಜನೆ:",
    learn_bull_tip: "ನಿಲ್ಲಿಸಿ, ನಿರ್ಬಂಧಿಸಿ ಮತ್ತು ತಿಳಿಸಿ. ಸೇಡು ತೀರಿಸಿಕೊಳ್ಳಬೇಡಿ. ಅಪರಾಧಿಯನ್ನು ನಿರ್ಬಂಧಿಸಿ ಮತ್ತು ನಡವಳಿಕೆಯನ್ನು ವೇದಿಕೆಗೆ ಅಥವಾ ವಿಶ್ವಾಸಾರ್ಹ ವಯಸ್ಕರಿಗೆ ವರದಿ ಮಾಡಿ.",
    learn_best_practices_3: "ಉತ್ತಮ ಅಭ್ಯಾಸಗಳು: ಮಾಡಬೇಕಾದದ್ದು ಮತ್ತು ಮಾಡಬಾರದ್ದು",
    learn_do_3: "ಮಾಡಿ:",
    learn_dont_3: "ಮಾಡಬೇಡಿ:",
    bull_do_1: "ಸೈಬರ್ ಬೆದರಿಕೆ ವರ್ತನೆಯನ್ನು ನಿರ್ಬಂಧಿಸಿ ಮತ್ತು ವರದಿ ಮಾಡಿ",
    bull_do_2: "ಸಂದೇಶಗಳು ಅಥವಾ ಸ್ಕ್ರೀನ್‌ಶಾಟ್‌ಗಳಂತಹ ಪುರಾವೆಗಳನ್ನು ಉಳಿಸಿ",
    bull_do_3: "ವಿಶ್ವಾಸಾರ್ಹ ವಯಸ್ಕ, ಶಿಕ್ಷಕ ಅಥವಾ ಪೋಷಕರೊಂದಿಗೆ ಮಾತನಾಡಿ",
    bull_do_4: "ಪ್ಲಾಟ್‌ಫಾರ್ಮ್ ವರದಿ ಮಾಡುವ ಸಾಧನಗಳನ್ನು ಜವಾಬ್ದಾರಿಯುತವಾಗಿ ಬಳಸಿ",
    bull_do_5: "ಆನ್‌ಲೈನ್‌ನಲ್ಲಿ ಬೆದರಿಕೆಗೊಳಗಾಗುತ್ತಿರುವ ಇತರರನ್ನು ಬೆಂಬಲಿಸಿ",
    bull_dont_1: "ಕೋಪದಿಂದ ಪ್ರತಿಕ್ರಿಯಿಸಿ ಅಥವಾ ಬೆದರಿಸುವವರೊಂದಿಗೆ ತೊಡಗಿಸಿಕೊಳ್ಳಿ",
    bull_dont_2: "ನೋಯಿಸುವ ಸಂದೇಶಗಳು ಅಥವಾ ಚಿತ್ರಗಳನ್ನು ಹಂಚಿಕೊಳ್ಳಿ",
    bull_dont_3: "ಆನ್‌ಲೈನ್ ಕಿರುಕುಳದಲ್ಲಿ ಭಾಗವಹಿಸಿ",
    bull_dont_4: "ಸೈಬರ್ ಬೆದರಿಕೆಗಾಗಿ ನಿಮ್ಮನ್ನೇ ದೂಷಿಸಿ",
    bull_dont_5: "ಪುನರಾವರ್ತಿತ ನಿಂದನೀಯ ವರ್ತನೆಯನ್ನು ನಿರ್ಲಕ್ಷಿಸಿ",

    learn_priv_title: "👁️🗨️ ಗೌಪ್ಯತೆ ರಕ್ಷಣೆ",
    learn_priv_desc: "ನಿಮ್ಮ ವೈಯಕ್ತಿಕ ಡೇಟಾ ಮೌಲ್ಯಯುತವಾಗಿದೆ. ಆನ್‌ಲೈನ್‌ನಲ್ಲಿ ಅತಿಯಾಗಿ ಹಂಚಿಕೊಳ್ಳುವುದರಿಂದ ಗುರುತಿನ ಕಳ್ಳತನ, ಹಿಂಬಾಲಿಸುವುದು ಮತ್ತು ಡಿಜಿಟಲ್ ಸೋಗು ಹಾಕುವಿಕೆಗೆ ಕಾರಣವಾಗಬಹುದು.",
    learn_golden_rule: "ಸುವರ್ಣ ನಿಯಮ:",
    learn_priv_tip: "ಒಮ್ಮೆ ಆನ್‌ಲೈನ್‌ನಲ್ಲಿ ಏನನ್ನಾದರೂ ಪೋಸ್ಟ್ ಮಾಡಿದರೆ, ಅದನ್ನು ಸಂಪೂರ್ಣವಾಗಿ ತೆಗೆದುಹಾಕುವುದು ಅಸಾಧ್ಯ. ನೀವು ಪೋಸ್ಟ್ ಮಾಡುವ ಮೊದಲು ಯೋಚಿಸಿ.",
    learn_best_practices_4: "ಉತ್ತಮ ಅಭ್ಯಾಸಗಳು: ಮಾಡಬೇಕಾದದ್ದು ಮತ್ತು ಮಾಡಬಾರದ್ದು",
    learn_do_4: "ಮಾಡಿ:",
    learn_dont_4: "ಮಾಡಬೇಡಿ:",
    priv_do_1: "ಸಾಮಾಜಿಕ ಮಾಧ್ಯಮದಲ್ಲಿ ಗೌಪ್ಯತೆ ಸೆಟ್ಟಿಂಗ್‌ಗಳನ್ನು ನಿಯಮಿತವಾಗಿ ಪರಿಶೀಲಿಸಿ",
    priv_do_2: "ವಿಶ್ವಾಸಾರ್ಹ ಪ್ಲಾಟ್‌ಫಾರ್ಮ್‌ಗಳಲ್ಲಿ ಮಾತ್ರ ವೈಯಕ್ತಿಕ ಮಾಹಿತಿಯನ್ನು ಹಂಚಿಕೊಳ್ಳಿ",
    priv_do_3: "ಬಲವಾದ ಪಾಸ್‌ವರ್ಡ್‌ಗಳನ್ನು ಬಳಸಿ ಮತ್ತು ಟು-ಫ್ಯಾಕ್ಟರ್ ಆಥೆಂಟಿಕೇಶನ್ ಅನ್ನು ಸಕ್ರಿಯಗೊಳಿಸಿ",
    priv_do_4: "ಸಾಫ್ಟ್‌ವೇರ್ ಮತ್ತು ಅಪ್ಲಿಕೇಶನ್‌ಗಳನ್ನು ನವೀಕರಿಸಿ",
    priv_do_5: "ಹಂಚಿದ ಅಥವಾ ಸಾರ್ವಜನಿಕ ಸಾಧನಗಳಿಂದ ಲಾಗ್ ಔಟ್ ಮಾಡಿ",
    priv_dont_1: "ವಿಳಾಸ, ಫೋನ್ ಸಂಖ್ಯೆ ಅಥವಾ ಐಡಿಯಂತಹ ವೈಯಕ್ತಿಕ ವಿವರಗಳನ್ನು ಆನ್‌ಲೈನ್‌ನಲ್ಲಿ ಹಂಚಿಕೊಳ್ಳಿ",
    priv_dont_2: "ಅಪರಿಚಿತ ಜನರಿಂದ ಸ್ನೇಹಿತರ ವಿನಂತಿಗಳನ್ನು ಸ್ವೀಕರಿಸಿ",
    priv_dont_3: "ಅನಗತ್ಯ ಅಪ್ಲಿಕೇಶನ್ ಅನುಮತಿಗಳನ್ನು ಅನುಮತಿಸಿ",
    priv_dont_4: "ಸೂಕ್ಷ್ಮ ಫೋಟೋಗಳು ಅಥವಾ ದಾಖಲೆಗಳನ್ನು ಸಾರ್ವಜನಿಕವಾಗಿ ಪೋಸ್ಟ್ ಮಾಡಿ",
    priv_dont_5: "ರಕ್ಷಣೆಯಿಲ್ಲದೆ ಸೂಕ್ಷ್ಮ ವಹಿವಾಟುಗಳಿಗಾಗಿ ಸಾರ್ವಜನಿಕ ವೈ-ಫೈ ಬಳಸಿ",

    // Quiz Page Static
    quiz_title: "ಸೈಬರ್ ಸುರಕ್ಷತೆ ತ್ವರಿತ ರಸಪ್ರಶ್ನೆ",
    quiz_completed: "ರಸಪ್ರಶ್ನೆ ಪೂರ್ಣಗೊಂಡಿದೆ!",
    quiz_score: "ನಿಮ್ಮ ಸ್ಕೋರ್:",
    quiz_retake: "ರಸಪ್ರಶ್ನೆಯನ್ನು ಮತ್ತೆ ತೆಗೆದುಕೊಳ್ಳಿ",
    quiz_current_score: "ಸ್ಕೋರ್:",
    quiz_loading: "ಪ್ರಶ್ನೆಯನ್ನು ಲೋಡ್ ಮಾಡಲಾಗುತ್ತಿದೆ...",
    quiz_next: "ಮುಂದಿನ ಪ್ರಶ್ನೆ",
    quizFeedbackCorrect: "ಸರಿ!",
    quizFeedbackIncorrect: "ತಪ್ಪು",
    quizProgress: "ಪ್ರಶ್ನೆ {current} ರ {total}",

    // Scenarios Page Static
    scenario_title: "ನಿಜ ಜೀವನದ ಸನ್ನಿವೇಶಗಳು",
    scenario_subtitle: "ಈ ಸಾಮಾನ್ಯ ಸೈಬರ್ ಸುರಕ್ಷತೆ ಸಂದರ್ಭಗಳಲ್ಲಿ ನಿಮ್ಮ ಪ್ರವೃತ್ತಿಯನ್ನು ಪರೀಕ್ಷಿಸಿ.",
    scenario_loading: "ಸನ್ನಿವೇಶವನ್ನು ಲೋಡ್ ಮಾಡಲಾಗುತ್ತಿದೆ...",
    scenario_action: "ನಿಮ್ಮ ಕ್ರಿಯೆ ಏನು?",
    scenario_next: "ಮುಂದಿನ ಸನ್ನಿವೇಶ",
    scenario_completed: "ಎಲ್ಲಾ ಸನ್ನಿವೇಶಗಳು ಪೂರ್ಣಗೊಂಡಿವೆ!",
    scenario_well_done: "ನೈಜ-ಪ್ರಪಂಚದ ಸೈಬರ್ ಬೆದರಿಕೆಗಳನ್ನು ಸುರಕ್ಷಿತವಾಗಿ ಅರ್ಥೈಸಿಕೊಳ್ಳುವಲ್ಲಿ ಉತ್ತಮ ಕೆಲಸ.",
    scenario_go_learn: "ಕಲಿಯಲು ಹೋಗಿ",
    scenario_restart: "ಮರುಪ್ರಾರಂಭಿಸಿ",
    scenarioProgress: "ಸನ್ನಿವೇಶ {current} ರ {total}",
    scenarioFeedbackSafe: "ಸುರಕ್ಷಿತ ಆಯ್ಕೆ!",
    scenarioFeedbackRisky: "ಅಪಾಯಕಾರಿ ಕ್ರಮ!",

    // Quiz Data Array
    quizData: [
      {
        q: "'ಫಿಶಿಂಗ್' ದಾಳಿಯ ಪ್ರಾಥಮಿಕ ಉದ್ದೇಶವೇನು?",
        options: [
          "ನೆಟ್ವರ್ಕ್ ವೇಗವನ್ನು ಪರೀಕ್ಷಿಸಲು.",
          "ಸೂಕ್ಷ್ಮ ಮಾಹಿತಿಯನ್ನು ಬಹಿರಂಗಪಡಿಸಲು ಜನರನ್ನು ಮೋಸಗೊಳಿಸಲು.",
          "ಸಾಫ್ಟ್ವೇರ್ ಅನ್ನು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ನವೀಕರಿಸಲು.",
          "ಸ್ಪ್ಯಾಮ್ ಇಮೇಲ್‌ಗಳನ್ನು ತಡೆಯಲು."
        ],
        answer: 1,
        explanation: "ಫಿಶಿಂಗ್ ಮೋಸವನ್ನು ಅವಲಂಬಿಸಿದೆ, ಪಾಸ್‌ವರ್ಡ್‌ಗಳು ಅಥವಾ ಕ್ರೆಡಿಟ್ ಕಾರ್ಡ್ ಸಂಖ್ಯೆಗಳನ್ನು ಹಸ್ತಾಂತರಿಸಲು ಬಲಿಪಶುಗಳನ್ನು ಮೋಸಗೊಳಿಸಲು ತುರ್ತು ಅಥವಾ ನಕಲಿ ಸಾಂಸ್ಥಿಕ ಸಂದೇಶಗಳನ್ನು ಹೆಚ್ಚಾಗಿ ಬಳಸಿಕೊಳ್ಳುತ್ತದೆ."
      },
      {
        q: "ಟು-ಫ್ಯಾಕ್ಟರ್ ಆಥೆಂಟಿಕೇಶನ್ (2FA) ಅನ್ನು ಬಳಸುವುದು ಏಕೆ ಮುಖ್ಯ?",
        options: [
          "ಇದು ನಿಮ್ಮ ಸಾಮಾಜಿಕ ಮಾಧ್ಯಮ ಪ್ರೊಫೈಲ್ ಅನ್ನು ಹೈಡ್ ಮಾಡುತ್ತದೆ.",
          "ಇದು ನಿಮ್ಮ ಇಂಟರ್ನೆಟ್ ಸಂಪರ್ಕವನ್ನು ವೇಗಗೊಳಿಸುತ್ತದೆ.",
          "ನಿಮ್ಮ ಪಾಸ್‌ವರ್ಡ್ ಕಳವಾದರೆ ಇದು ಭದ್ರತೆಯ ದ್ವಿತೀಯ ಪದರವನ್ನು ಒದಗಿಸುತ್ತದೆ.",
          "ಇದು ನಿಮ್ಮ ಬ್ಯಾಟರಿ ಹೆಚ್ಚು ಕಾಲ ಬಾಳಿಕೆ ಬರುವಂತೆ ಮಾಡುತ್ತದೆ."
        ],
        answer: 2,
        explanation: "ಹ್ಯಾಕರ್ ನಿಮ್ಮ ಪಾಸ್‌ವರ್ಡ್ ಅನ್ನು ಪಡೆದರೂ ಸಹ, ನಿಮ್ಮ ಖಾತೆಯನ್ನು ಪ್ರವೇಶಿಸಲು ಅವರಿಗೆ ದ್ವಿತೀಯ ಟೋಕನ್ (SMS ಕೋಡ್‌ನಂತಹ) ಅಗತ್ಯವಿರುತ್ತದೆ."
      },
      {
        q: "ನೀವು ಪ್ರವೇಶಿಸದ ಲಾಟರಿಯನ್ನು ಗೆದ್ದಿದ್ದೀರಿ ಎಂದು ಹೇಳುವ ಮತ್ತು ಪ್ರಕ್ರಿಯೆ ಶುಲ್ಕವನ್ನು ಕೇಳುವ SMS ಅನ್ನು ನೀವು ಸ್ವೀಕರಿಸಿದರೆ, ನೀವು ಏನು ಮಾಡಬೇಕು?",
        options: [
          "ಬಹುಮಾನವನ್ನು ಪಡೆಯಲು ತ್ವರಿತವಾಗಿ ಶುಲ್ಕವನ್ನು ಪಾವತಿಸಿ.",
          "ಸಂದೇಶವನ್ನು ನಿರ್ಲಕ್ಷಿಸಿ ಮತ್ತು ಅಳಿಸಿ.",
          "ಅದನ್ನು ವೇಗಗೊಳಿಸಲು ನಿಮ್ಮ ಬ್ಯಾಂಕ್ ವಿವರಗಳೊಂದಿಗೆ ಪ್ರತ್ಯುತ್ತರಿಸಿ.",
          "ನಿಮ್ಮ ಎಲ್ಲ ಸ್ನೇಹಿತರಿಗೂ ಅದನ್ನು ಫಾರ್ವರ್ಡ್ ಮಾಡಿ."
        ],
        answer: 1,
        explanation: "ಇದು ಕ್ಲಾಸಿಕ್ ಮುಂಗಡ-ಶುಲ್ಕ ಹಗರಣವಾಗಿದೆ. ಪರಿಶೀಲಿಸದ ಬಹುಮಾನಗಳನ್ನು ನೀಡುವ ಅಪರಿಚಿತರಿಗೆ ಹಣ ಅಥವಾ ವಿವರಗಳನ್ನು ಎಂದಿಗೂ ಕಳುಹಿಸಬೇಡಿ."
      },
      {
        q: "ಸೈಬರ್ ಬೆದರಿಕೆ ಘಟನೆಯನ್ನು ನಿಭಾಯಿಸಲು ಸುರಕ್ಷಿತ ಮಾರ್ಗ ಯಾವುದು?",
        options: [
          "ಅವರನ್ನು ಮರಳಿ ಬೆದರಿಸುವುದು.",
          "ಸಾಮಾಜಿಕ ಮಾಧ್ಯಮದಲ್ಲಿ ಸಾರ್ವಜನಿಕವಾಗಿ ಪೋಸ್ಟ್ ಮಾಡುವುದು.",
          "ನಿಲ್ಲಿಸಿ, ನಿರ್ಬಂಧಿಸಿ ಮತ್ತು ವಿಶ್ವಾಸಾರ್ಹ ವಯಸ್ಕರಿಗೆ ಅಥವಾ ಅಧಿಕಾರಿಗೆ ತಿಳಿಸಿ.",
          "ನಿಮ್ಮ ಖಾತೆಯನ್ನು ಸಂಪೂರ್ಣವಾಗಿ ಅಳಿಸಿ ಹಾಕುವುದು."
        ],
        answer: 2,
        explanation: "ಬೆದರಿಸುವವರಿಗೆ ಪ್ರತಿಕ್ರಿಯಿಸಬೇಡಿ. ಅವರನ್ನು ನಿರ್ಬಂಧಿಸುವುದರಿಂದ ನಿಮ್ಮ ಮೇಲಿನ ಅವರ ಪ್ರವೇಶವು ಕಡಿತಗೊಳ್ಳುತ್ತದೆ ಮತ್ತು ವರದಿ ಮಾಡುವುದರಿಂದ ಸೂಕ್ತ ಕ್ರಮ ಕೈಗೊಳ್ಳಬಹುದು ಎಂದು ಖಚಿತಪಡಿಸುತ್ತದೆ."
      },
      {
        q: "ಭಾರತದಲ್ಲಿ ಅಧಿಕೃತ ರಾಷ್ಟ್ರೀಯ ಸೈಬರ್ ಕ್ರೈಮ್ ಸಹಾಯವಾಣಿ ಸಂಖ್ಯೆ ಯಾವುದು?",
        options: ["100", "1930", "112", "108"],
        answer: 1,
        explanation: "ಆರ್ಥಿಕ ಮತ್ತು ಇತರ ಸೈಬರ್ ಅಪರಾಧಗಳನ್ನು ವರದಿ ಮಾಡಲು 1930 ಭಾರತದಲ್ಲಿ ಮೀಸಲಾದ ರಾಷ್ಟ್ರೀಯ ಸೈಬರ್ ಕ್ರೈಮ್ ಸಹಾಯವಾಣಿಯಾಗಿದೆ."
      }
    ],

    // Scenario Data Array
    scenarioData: [
      {
        title: "ಅನಿರೀಕ್ಷಿತ ಉದ್ಯೋಗ ಪ್ರಸ್ತಾಪ",
        desc: "ನೀವು ಮನೆಯಿಂದ ಕೆಲಸ (ವರ್ಕ್ ಫ್ರಮ್ ಹೋಮ್) ನೀಡುವ ಅಂತಾರಾಷ್ಟ್ರೀಯ ಸಂಖ್ಯೆಯಿಂದ ವಾಟ್ಸ್ಆ್ಯಪ್ (WhatsApp) ಸಂದೇಶವನ್ನು ಪಡೆಯುತ್ತೀರಿ. ಕೇವಲ 'ಯೂಟ್ಯೂಬ್ ವೀಡಿಯೊಗಳನ್ನು ಲೈಕ್' ಮಾಡುವುದಕ್ಕೆ ಹೆಚ್ಚಿನ ಲಾಭವನ್ನು ನೀಡುವುದಾಗಿ ಭರವಸೆ ನೀಡುತ್ತಾರೆ ಮತ್ತು ನೀವು ಟೆಲಿಗ್ರಾಮ್ ಗ್ರೂಪ್‌ಗೆ ಸೇರಲು ಕೇಳುತ್ತಾರೆ, ಅಲ್ಲಿ ಪ್ರಾರಂಭಿಸಲು ನೀವು ಸ್ವಲ್ಪ 'ನೋಂದಣಿ ಶುಲ್ಕ' ಪಾವತಿಸಬೇಕು.",
        options: [
          "ಶುಲ್ಕವನ್ನು ಪಾವತಿಸಿ. ಇದು அதிக ಸಂಭಾವನೆ ನೀಡುವ ಉದ್ಯೋಗಕ್ಕಾಗಿ ಒಂದು ಸಣ್ಣ ಹೂಡಿಕೆಯಾಗಿದೆ.",
          "ಪಾವತಿಸದೆ ಇದು ನಿಜವೇ ಎಂದು ನೋಡಲು ಟೆಲಿಗ್ರಾಮ್ ಗ್ರೂಪ್ ಸೇರಿ.",
          "ಸಂಖ್ಯೆಯನ್ನು ನಿರ್ಬಂಧಿಸಿ, ಸ್ಪ್ಯಾಮ್ ಎಂದು ವರದಿ ಮಾಡಿ ಮತ್ತು ಪ್ರಸ್ತಾಪವನ್ನು ನಿರ್ಲಕ್ಷಿಸಿ.",
          "ಮೊದಲು ಅವರು ನೇರವಾಗಿ ಗಳಿಕೆಯನ್ನು ಠೇವಣಿ ಮಾಡಲು ನಿಮ್ಮ ಬ್ಯಾಂಕ್ ವಿವರಗಳನ್ನು ಹಂಚಿಕೊಳ್ಳಿ."
        ],
        correct: 2,
        explanation: "ಇದು ಸಾಮಾನ್ಯ ಕಾರ್ಯ-ಆಧಾರಿತ ಹಗರಣ (ಟಾಸ್ಕ್ ಸ್ಕ್ಯಾಮ್). ವಂಚಕರು ಸಣ್ಣ ಆರಂಭಿಕ ಪಾವತಿಗಳು ಅಥವಾ ಭರವಸೆಗಳೊಂದಿಗೆ ಬಲಿಪಶುಗಳನ್ನು ಆಕರ್ಷಿಸುತ್ತಾರೆ, ನಂತರ 'ಶುಲ್ಕ'ಗಳ ಮೂಲಕ ದೊಡ್ಡ ಮೊತ್ತಕ್ಕೆ ವಂಚಿಸುತ್ತಾರೆ. ಅಜ್ಞಾತ ಸಂಖ್ಯೆಗಳಿಂದ ಅನಗತ್ಯ ಉದ್ಯೋಗ ಪ್ರಸ್ತಾಪಗಳನ್ನು ಯಾವಾಗಲೂ ನಿರ್ಬಂಧಿಸಿ ಮತ್ತು ವರದಿ ಮಾಡಿ."
      },
      {
        title: "ಬಾಕಿ ಉಳಿದ ವಿದ್ಯುತ್ ಬಿಲ್",
        desc: "ನೀವು ತುರ್ತಾಗಿ ಈ ರೀತಿ ಹೇಳುವ ಎಸ್‌ಎಂಎಸ್: 'ಆತ್ಮೀಯ ಗ್ರಾಹಕ, ಕಳೆದ ತಿಂಗಳ ಬಿಲ್ ಅನ್ನು ನವೀಕರಿಸದ ಕಾರಣ ನಿಮ್ಮ ವಿದ್ಯುತ್ ಸಂಪರ್ಕವನ್ನು ಇಂದು ರಾತ್ರಿ 9:30 ಕ್ಕೆ ಕಡಿತಗೊಳಿಸಲಾಗುವುದು ದಯವಿಟ್ಟು 98XXXXXX ನಲ್ಲಿ ತಕ್ಷಣ ನಮ್ಮ ಕಾರ್ಯನಿರ್ವಾಹಕರಿಗೆ ಕರೆ ಮಾಡಿ.'",
        options: [
          "ವಿದ್ಯುತ್ ಕಡಿತವನ್ನು ತಪ್ಪಿಸಲು ತಕ್ಷಣ ಸಂಖ್ಯೆಗೆ ಕರೆ ಮಾಡಿ.",
          "ಬಿಲ್ ಪಾವತಿಸಲು SMS ನಲ್ಲಿ ಒದಗಿಸಲಾದ ಲಿಂಕ್ ಅನ್ನು ಕ್ಲಿಕ್ ಮಾಡಿ.",
          "ಭೀತಿಯಿಂದ ಮತ್ತು ಕುಟುಂಬ ಸದಸ್ಯರಿಗೆ ಎಚ್ಚರಿಕೆ ನೀಡುವ ಸಂದೇಶವನ್ನು ಕಳುಹಿಸಿ.",
          "ಸಂದೇಶವನ್ನು ನಿರ್ಲಕ್ಷಿಸಿ ಮತ್ತು ನಿಮ್ಮ ಅಧಿಕೃತ ವಿದ್ಯುತ್ ಪೂರೈಕೆದಾರರ ಅಪ್ಲಿಕೇಶನ್ ಅಥವಾ ಪೋರ್ಟಲ್ ಅನ್ನು ಪರಿಶೀಲಿಸಿ."
        ],
        correct: 3,
        explanation: "ನ್ಯಾಯಸಮ್ಮತ ವಿದ್ಯುತ್ ಮಂಡಳಿಗಳು ವೈಯಕ್ತಿಕ ಮೊಬೈಲ್ ಸಂಖ್ಯೆಗಳಿಂದ ಬೆದರಿಕೆಗಳನ್ನು ಕಳುಹಿಸುವುದಿಲ್ಲ. ಸ್ಕ್ರೀನ್-ಶೇರಿಂಗ್ ಅಪ್ಲಿಕೇಶನ್‌ಗಳನ್ನು ಡೌನ್‌ಲೋಡ್ ಮಾಡಲು ಅಥವಾ ಮೋಸದ ಪಾವತಿಗಳನ್ನು ಮಾಡಲು ಬಲಿಪಶುಗಳನ್ನು ಮೋಸಗೊಳಿಸಲು ಸ್ಕ್ಯಾಮರ್‌ಗಳು ಈ ಪ್ಯಾನಿಕ್ ತಂತ್ರವನ್ನು ಬಳಸುತ್ತಾರೆ."
      },
      {
        title: "ಸಾಮಾಜಿಕ ಮಾಧ್ಯಮ (ಸೋಶಿಯಲ್ ಮೀಡಿಯಾ) ಕ್ಲೋನ್",
        desc: "ಆನ್‌ಲೈನ್‌ನಲ್ಲಿ ನಿಮ್ಮ ಆತ್ಮೀಯ ಸ್ನೇಹಿತ ಈಗಾಗಲೇ ಸ್ನೇಹಿತರಾಗಿದ್ದರೂ ಸಹ, ಅವರಿಂದ ನಿಮಗೆ ಸ್ನೇಹಿತರ ವಿನಂತಿ (ಫ್ರೆಂಡ್ ರಿಕ್ವೆಸ್ಟ್) ಬರುತ್ತದೆ. ಹೊಸ ಪ್ರೊಫೈಲ್ ಅದೇ ಚಿತ್ರವನ್ನು ಹೊಂದಿದೆ ಆದರೆ ಕೆಲವೇ ಪೋಸ್ಟ್‌ಗಳನ್ನು ಹೊಂದಿದೆ. ಶೀಘ್ರದಲ್ಲೇ, ಈ 'ಹೊಸ ಪ್ರೊಫೈಲ್' ನಿಮಗೆ ತುರ್ತು ಸಂದೇಶ ಕಳುಹಿಸಿ ಹಣವನ್ನು ಕೇಳುತ್ತದೆ.",
        options: [
          "ಬೇಗನೆ ಹಣವನ್ನು ಕಳುಹಿಸಿ; ಇದು ತುರ್ತು ಪರಿಸ್ಥಿತಿ!",
          "ವಿನಂತಿಯನ್ನು ಸ್ವೀಕರಿಸಿ ಮತ್ತು ಅವರ ಬ್ಯಾಂಕ್ ವಿವರಗಳನ್ನು ಕೇಳಿ.",
          "ಪರಿಶೀಲಿಸಲು ನಿಮ್ಮ ಸ್ನೇಹಿತನಿಗೆ ಅವರ ಫೋನ್‌ನಲ್ಲಿ ನೇರವಾಗಿ ಕರೆ ಮಾಡಿ.",
          "ಪರಿಶೀಲಿಸದೆ ತಕ್ಷಣವೇ ಹೊಸ ಖಾತೆಯನ್ನು ವರದಿ ಮಾಡಿ."
        ],
        correct: 2,
        explanation: "ಅಸಾಮಾನ್ಯ ವಿನಂತಿಗಳನ್ನು (out-of-character requests) ಪರ್ಯಾಯ ಮಾರ್ಗದ ಮೂಲಕ ಸಂಪರ್ಕಿಸುವ (ನೇರ ಫೋನ್ ಕರೆಯಂತೆ) ಮೂಲಕ ಯಾವಾಗಲೂ ಪರಿಶೀಲಿಸಿ. ಬಲಿಪಶುವಿನ ಸ್ನೇಹಿತರನ್ನು ಮೋಸಗೊಳಿಸಲು ವಂಚಕರು ಆಗಾಗ್ಗೆ ಪ್ರೊಫೈಲ್‌ಗಳನ್ನು ಕ್ಲೋನ್ ಮಾಡುತ್ತಾರೆ."
      },
      {
        title: "ಸಾರ್ವಜನಿಕ ವೈ-ಫೈ (Wi-Fi) ಸಂಪರ್ಕ",
        desc: "ನೀವು ಕಾಫಿ ಶಾಪ್‌ನಲ್ಲಿ ಕುಳಿತಿದ್ದೀರಿ ಮತ್ತು ನಿಮ್ಮ ಫೋನ್ 'Free_Coffee_WiFi' ಎಂಬ ಓಪನ್ ವೈ-ಫೈ ನೆಟ್‌ವರ್ಕ್‌ಗೆ ಸಂಪರ್ಕಗೊಳ್ಳುತ್ತದೆ. ನಿಮ್ಮ ಬಾಡಿಗೆಯನ್ನು ಪಾವತಿಸಲು ನೀವು ತ್ವರಿತ ಬ್ಯಾಂಕ್ ವರ್ಗಾವಣೆ ಮಾಡಬೇಕಾಗಿದೆ.",
        options: [
          "ಸಂಪರ್ಕ ಕಡಿತಗೊಳಿಸುವ ಮೊದಲು ಬೇಗನೆ ವರ್ಗಾವಣೆ ಮಾಡಿ.",
          "ವೈ-ಫೈ ಬಳಸಿ ಆದರೆ VPN ಬಳಸಿ, ಅಥವಾ ಸಂಪರ್ಕ ಕಡಿತಗೊಳಿಸಿ ಮತ್ತು ನಿಮ್ಮ ಮೊಬೈಲ್ ಡೇಟಾವನ್ನು ಬಳಸುವುದು ಉತ್ತಮ.",
          "ನೆಟ್ವರ್ಕ್ ಸುರಕ್ಷಿತವಾಗಿದೆಯೇ ಎಂದು ಬರಿಸ್ತಾನನ್ನು ಕೇಳಿ, ನಂತರ ವರ್ಗಾವಣೆ ಮಾಡಿ.",
          "ವರ್ಗಾವಣೆ ಮಾಡಲು ನಿಮ್ಮ ಬ್ರೌಸರ್‌ನ 'ಇನ್‌ಕಾಗ್ನಿಟೊ' (Incognito) ಮೋಡ್ ಅನ್ನು ಬಳಸಿ."
        ],
        correct: 1,
        explanation: "ಓಪನ್ ಸಾರ್ವಜನಿಕ ವೈ-ಫೈ ನೆಟ್‌ವರ್ಕ್‌ಗಳು 'ಮ್ಯಾನ್-ಇನ್-ದ-ಮಿಡ್ಲ್' (Man-in-the-Middle) ದಾಳಿಗೆ ಗುರಿಯಾಗಬಹುದು. ಸೂಕ್ಷ್ಮ ವಹಿವಾಟುಗಳಿಗಾಗಿ ನಿಮ್ಮ ಸ್ವಂತ ಸೆಲ್ಯುಲಾರ್ ಡೇಟಾವನ್ನು ಬಳಸುವುದು ಸುರಕ್ಷಿತವಾಗಿದೆ. ಇನ್‌ಕಾಗ್ನಿಟೊ ಮೋಡ್ ನಿಮ್ಮ ಸಂಪರ್ಕವನ್ನು ಎನ್‌ಕ್ರಿಪ್ಟ್ ಮಾಡುವುದಿಲ್ಲ."
      }
    ]
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLanguage();
  initGreeting();
  initMobileMenu();
  if (document.getElementById('password-input')) {
    initPasswordAnalyzer();
  }
});

// --- Theme Toggling ---
function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle');
  if (!toggleBtn) return;

  // Check saved theme or system preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  toggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });
}

// --- Localization ---
function initLanguage() {
  const langSelect = document.getElementById('lang-select');
  if (!langSelect) return;

  const savedLang = localStorage.getItem('lang') || 'en';
  langSelect.value = savedLang;
  applyTranslations(savedLang);

  langSelect.addEventListener('change', (e) => {
    const lang = e.target.value;
    localStorage.setItem('lang', lang);
    applyTranslations(lang);
    updateGreeting(lang); // Re-run greeting to translate it
  });
}

function applyTranslations(lang) {
  const texts = translations[lang];
  if (!texts) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (texts[key]) {
      if (el.tagName.toLowerCase() === 'input' && el.type === 'text') {
        el.placeholder = texts[key];
      } else {
        el.innerHTML = texts[key];
      }
    }
  });
}

// --- Time-based Greeting ---
function initGreeting() {
  const lang = localStorage.getItem('lang') || 'en';
  updateGreeting(lang);
}

function updateGreeting(lang) {
  const greetingEl = document.getElementById('greeting');
  if (!greetingEl) return;

  const hour = new Date().getHours();
  //  Morning (5:00–11:59), Afternoon (12:00–16:59), Evening (17:00–23:59/4:59)
  let greetingKey = 'greetEvening';
  let emoji = '🌙';
  if (hour >= 5 && hour < 12) {
    greetingKey = 'greetMorning';
    emoji = '🌅';
  } else if (hour >= 12 && hour < 17) {
    greetingKey = 'greetAfternoon';
    emoji = '☀️';
  }

  const text = translations[lang][greetingKey] || translations['en'][greetingKey];
  greetingEl.textContent = `${emoji} ${text}`;

  // Restart CSS animation by re-triggering reflow
  greetingEl.style.animation = 'none';
  greetingEl.offsetHeight; // trigger reflow
  greetingEl.style.animation = null;
}

// --- Mobile Menu ---
function initMobileMenu() {
  const btn = document.getElementById('mobile-menu-btn');
  const links = document.getElementById('nav-links');
  if (btn && links) {
    btn.addEventListener('click', () => {
      links.classList.toggle('active');
    });
  }
}

// --- Password Analyzer ---
function initPasswordAnalyzer() {
  const passwordInput = document.getElementById('password-input');
  const strengthBar = document.getElementById('strength-bar');
  const strengthText = document.getElementById('strength-text');
  const suggestionsList = document.getElementById('suggestions-list');
  const generateBtn = document.getElementById('generate-btn');
  const togglePassword = document.getElementById('toggle-password');

  const commonPasswords = ['password', '123456', '12345678', '1234', 'qwerty', 'admin', 'welcome', 'login'];

  const strengthLevels = [
    { label: 'Very Weak', color: 'var(--color-danger)', width: '20%' },
    { label: 'Weak', color: '#ff8800', width: '40%' },
    { label: 'Medium', color: 'var(--color-warning)', width: '60%' },
    { label: 'Strong', color: '#0066cc', width: '80%' },
    { label: 'Very Strong', color: 'var(--color-success)', width: '100%' }
  ];

  function checkStrength(password) {
    let score = 0;
    let suggestions = [];

    if (password.length === 0) return { score: -1, suggestions: [] };

    if (commonPasswords.includes(password.toLowerCase())) {
      return { score: 0, suggestions: ['This is a very common password. Please choose something else.'] };
    }

    const hasLength = password.length >= 8;
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecial = /[^A-Za-z0-9]/.test(password);

    if (hasLength) score++;
    if (hasUpper) score++;
    if (hasLower) score++;
    if (hasNumber) score++;
    if (hasSpecial) score++;

    if (!hasLength) suggestions.push('Use at least 8 characters');
    if (!hasUpper) suggestions.push('Include at least one uppercase letter');
    if (!hasLower) suggestions.push('Include at least one lowercase letter');
    if (!hasNumber) suggestions.push('Include at least one number');
    if (!hasSpecial) suggestions.push('Include at least one special character');

    if (!hasLength && score > 1) score = 1;
    let index = Math.max(0, score - 1);
    if (score === 0) index = 0;

    return { score: index, suggestions, isPerfect: score === 5 };
  }

  function updateUI() {
    const password = passwordInput.value;
    const result = checkStrength(password);

    if (result.score === -1) {
      strengthBar.style.width = '0';
      strengthText.textContent = 'Enter password';
      strengthText.style.color = 'inherit';
      suggestionsList.innerHTML = '';
      return;
    }

    const level = strengthLevels[result.score];
    strengthBar.style.width = level.width;
    strengthBar.style.backgroundColor = level.color;
    strengthBar.style.boxShadow = `0 0 10px ${level.color}`;

    strengthText.textContent = level.label;
    strengthText.style.color = level.color;

    suggestionsList.innerHTML = '';
    if (result.isPerfect) {
      const li = document.createElement('li');
      li.textContent = 'Your password is secure';
      li.classList.add('valid');
      li.style.color = 'var(--color-success)';
      suggestionsList.appendChild(li);
    } else {
      result.suggestions.forEach(msg => {
        const li = document.createElement('li');
        li.textContent = msg;
        suggestionsList.appendChild(li);
      });
    }
  }

  function generatePassword() {
    const length = 16;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let retVal = "";
    retVal += "ABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(Math.random() * 26));
    retVal += "abcdefghijklmnopqrstuvwxyz".charAt(Math.floor(Math.random() * 26));
    retVal += "0123456789".charAt(Math.floor(Math.random() * 10));
    retVal += "!@#$%^&*()_+~`|}{[]:;?><,./-=".charAt(Math.floor(Math.random() * 29));
    for (let i = 0, n = charset.length; i < length - 4; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    retVal = retVal.split('').sort(() => 0.5 - Math.random()).join('');
    passwordInput.value = retVal;
    updateUI();
  }

  passwordInput.addEventListener('input', updateUI);
  if (generateBtn) generateBtn.addEventListener('click', generatePassword);

  if (togglePassword) {
    togglePassword.addEventListener('click', () => {
      const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
      passwordInput.setAttribute('type', type);
      togglePassword.textContent = type === 'password' ? '👁️' : '🔒';
    });
  }
}

// --- Quiz Logic ---
function initQuiz() {
  const container = document.getElementById('quiz-container');
  if (!container) return;

  const lang = localStorage.getItem('lang') || 'en';
  const t = translations[lang] || translations['en'];
  const quizData = t.quizData;

  let currentQuestion = 0;
  let score = 0;

  const activeBlock = document.getElementById('quiz-active');
  const endBlock = document.getElementById('quiz-end');
  const qProgress = document.getElementById('q-progress');
  const qText = document.getElementById('question-text');
  const optionsContainer = document.getElementById('options-container');
  const feedbackBox = document.getElementById('quiz-feedback');
  const feedbackTitle = document.getElementById('feedback-title');
  const feedbackText = document.getElementById('feedback-text');
  const nextBtn = document.getElementById('next-btn');
  const scoreDisplay = document.getElementById('current-score');

  function loadQuestion() {
    feedbackBox.style.display = 'none';
    const data = quizData[currentQuestion];
    qProgress.textContent = (t.quizProgress || "Question {current} of {total}").replace('{current}', currentQuestion + 1).replace('{total}', quizData.length);
    scoreDisplay.textContent = score;
    qText.textContent = data.q;

    optionsContainer.innerHTML = '';

    data.options.forEach((opt, index) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.textContent = opt;
      btn.onclick = () => selectOption(index, btn);
      optionsContainer.appendChild(btn);
    });
  }

  function selectOption(index, btnEl) {
    const data = quizData[currentQuestion];
    const isCorrect = (index === data.answer);

    // Disable all options
    const btns = optionsContainer.querySelectorAll('.option-btn');
    btns.forEach(b => b.disabled = true);

    if (isCorrect) {
      btnEl.classList.add('correct');
      score++;
      scoreDisplay.textContent = score;
      feedbackTitle.textContent = t.quizFeedbackCorrect || "Correct!";
      feedbackTitle.style.color = "var(--color-success)";
      feedbackBox.style.borderLeftColor = "var(--color-success)";
      feedbackBox.style.backgroundColor = "rgba(22, 163, 74, 0.05)";
    } else {
      btnEl.classList.add('wrong');
      btns[data.answer].classList.add('correct'); // Show correct answer
      feedbackTitle.textContent = t.quizFeedbackIncorrect || "Incorrect";
      feedbackTitle.style.color = "var(--color-danger)";
      feedbackBox.style.borderLeftColor = "var(--color-danger)";
      feedbackBox.style.backgroundColor = "rgba(220, 38, 38, 0.05)";
    }

    feedbackText.textContent = data.explanation;
    feedbackBox.style.display = 'block';
  }

  nextBtn.onclick = () => {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      activeBlock.style.display = 'none';
      endBlock.style.display = 'block';
      document.getElementById('score-display').textContent = score;
      document.getElementById('total-display').textContent = quizData.length;
    }
  };

  loadQuestion();
}

// --- Scenarios Logic ---
function initScenarios() {
  const container = document.getElementById('scenario-container');
  if (!container) return;

  const lang = localStorage.getItem('lang') || 'en';
  const t = translations[lang] || translations['en'];
  const scenarioData = t.scenarioData;

  let currentScenario = 0;

  const sProgress = document.getElementById('s-progress');
  const sTitle = document.getElementById('scenario-title');
  const sDesc = document.getElementById('scenario-desc');
  const sOptionsContainer = document.getElementById('s-options-container');
  const sFeedbackBox = document.getElementById('scenario-feedback');
  const sFeedbackTitle = document.getElementById('s-feedback-title');
  const sFeedbackText = document.getElementById('s-feedback-text');
  const sNextBtn = document.getElementById('s-next-btn');
  const endBlock = document.getElementById('scenario-end');

  function loadScenario() {
    sFeedbackBox.style.display = 'none';
    const data = scenarioData[currentScenario];
    sProgress.textContent = (t.scenarioProgress || "Scenario {current} of {total}").replace('{current}', currentScenario + 1).replace('{total}', scenarioData.length);
    sTitle.textContent = data.title;
    sDesc.textContent = data.desc;

    sOptionsContainer.innerHTML = '';

    data.options.forEach((opt, index) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.textContent = opt;
      btn.onclick = () => selectSOption(index, btn);
      sOptionsContainer.appendChild(btn);
    });
  }

  function selectSOption(index, btnEl) {
    const data = scenarioData[currentScenario];
    const isCorrect = (index === data.correct);

    // Disable all options
    const btns = sOptionsContainer.querySelectorAll('.option-btn');
    btns.forEach(b => b.disabled = true);

    if (isCorrect) {
      btnEl.classList.add('correct');
      sFeedbackTitle.textContent = t.scenarioFeedbackSafe || "Safe Choice!";
      sFeedbackTitle.style.color = "var(--color-success)";
      sFeedbackBox.style.borderLeftColor = "var(--color-success)";
      sFeedbackBox.style.backgroundColor = "rgba(22, 163, 74, 0.05)";
    } else {
      btnEl.classList.add('wrong');
      btns[data.correct].classList.add('correct'); // Show safe answer
      sFeedbackTitle.textContent = t.scenarioFeedbackRisky || "Risky Action!";
      sFeedbackTitle.style.color = "var(--color-danger)";
      sFeedbackBox.style.borderLeftColor = "var(--color-danger)";
      sFeedbackBox.style.backgroundColor = "rgba(220, 38, 38, 0.05)";
    }

    sFeedbackText.textContent = data.explanation;
    sFeedbackBox.style.display = 'block';
  }

  sNextBtn.onclick = () => {
    currentScenario++;
    if (currentScenario < scenarioData.length) {
      loadScenario();
    } else {
      sProgress.parentElement.style.display = 'none';
      document.querySelector('.question-block').style.display = 'none';
      sFeedbackBox.style.display = 'none';
      endBlock.style.display = 'block';
    }
  };

  loadScenario();
}
