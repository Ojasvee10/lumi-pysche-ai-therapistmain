"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import ChatMessage from "./ChatMessage"
import EmotionDetector from "./EmotionDetector"

interface Message {
  id: string
  text: string
  sender: "user" | "ai"
  timestamp: Date
  recommendations?: {
    type: "breathing" | "exercise" | "therapy"
    title: string
    link: string
    description: string
  }[]
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm LUMI, your AI mental health companion. I'm here to listen and provide support using evidence-based therapy techniques. What's on your mind today? Feel free to share anything—I'm here to help.",
      sender: "ai",
      timestamp: new Date(),
    },
  ])
  const [inputText, setInputText] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const generateResponse = (userMessage: string): { text: string; recommendations: Message["recommendations"] } => {
    const emotion = EmotionDetector.detectEmotion(userMessage)
    const sentiment = EmotionDetector.getSentiment(userMessage)
    const severity = EmotionDetector.getSeverityLevel(emotion, userMessage)
    const cognitivePatterns = EmotionDetector.getCognitivePatterns(userMessage)
    const symptomClusters = EmotionDetector.getSymptomClusters(userMessage)

    const recommendations: Message["recommendations"] = []

    const recommendationsByEmotion: { [key: string]: Message["recommendations"] } = {
      depression: [
        {
          type: "breathing",
          title: "Coherent Breathing (5-5 rhythm)",
          link: "/breathing",
          description: "Balanced breathing to calm your nervous system and improve emotional balance.",
        },
        {
          type: "exercise",
          title: "Gratitude Practice",
          link: "/exercises",
          description: "Cultivate positive emotions by noting 3 things you're grateful for today.",
        },
        {
          type: "therapy",
          title: "Loving-Kindness Meditation",
          link: "/exercises",
          description: "Increase self-compassion through guided meditation for emotional healing.",
        },
      ],
      anxiety: [
        {
          type: "breathing",
          title: "4-7-8 Breathing",
          link: "/breathing",
          description: "Proven technique to reduce anxiety and calm your nervous system quickly.",
        },
        {
          type: "exercise",
          title: "5-4-3-2-1 Grounding Technique",
          link: "/exercises",
          description: "Ground yourself in the present moment to reduce anxious thoughts.",
        },
        {
          type: "breathing",
          title: "Box Breathing",
          link: "/breathing",
          description: "Equal count breathing used by professionals to manage stress and focus.",
        },
      ],
      anger: [
        {
          type: "breathing",
          title: "Belly Breathing",
          link: "/breathing",
          description: "Deep diaphragmatic breathing to activate your relaxation response.",
        },
        {
          type: "exercise",
          title: "Progressive Muscle Relaxation",
          link: "/exercises",
          description: "Release physical tension by systematically relaxing muscle groups.",
        },
        {
          type: "therapy",
          title: "STOP Technique",
          link: "/exercises",
          description: "Quick 2-5 minute mindfulness exercise to pause and regain control.",
        },
      ],
      grief: [
        {
          type: "exercise",
          title: "Loving-Kindness Meditation",
          link: "/exercises",
          description: "Send compassion to yourself and honor your feelings of loss.",
        },
        {
          type: "therapy",
          title: "Values Clarification",
          link: "/exercises",
          description: "Reconnect with what matters most and find meaning in your life.",
        },
        {
          type: "breathing",
          title: "4-7-8 Breathing",
          link: "/breathing",
          description: "Soothing technique to calm emotional overwhelm and support healing.",
        },
      ],
      trauma: [
        {
          type: "breathing",
          title: "Box Breathing",
          link: "/breathing",
          description: "Grounding breathing technique for trauma response and safety.",
        },
        {
          type: "exercise",
          title: "Body Scan Meditation",
          link: "/exercises",
          description: "Gently reconnect with your body in a safe, controlled way.",
        },
        {
          type: "exercise",
          title: "5-4-3-2-1 Grounding",
          link: "/exercises",
          description: "Powerful sensory grounding to anchor you in the present moment.",
        },
      ],
      shame: [
        {
          type: "exercise",
          title: "Loving-Kindness Meditation",
          link: "/exercises",
          description: "Cultivate self-compassion and challenge shame with guided practice.",
        },
        {
          type: "therapy",
          title: "Thought Challenging",
          link: "/exercises",
          description: "Use CBT techniques to challenge shame-based negative thoughts.",
        },
        {
          type: "breathing",
          title: "Coherent Breathing",
          link: "/breathing",
          description: "Heart-centered breathing to rebuild inner peace and self-worth.",
        },
      ],
      joy: [
        {
          type: "exercise",
          title: "Gratitude Practice",
          link: "/exercises",
          description: "Amplify your joy by celebrating and documenting what you're grateful for.",
        },
        {
          type: "therapy",
          title: "Values Clarification",
          link: "/exercises",
          description: "Align more of your life with what brings you joy and meaning.",
        },
      ],
      hope: [
        {
          type: "exercise",
          title: "Values Clarification",
          link: "/exercises",
          description: "Build on your hope by setting goals aligned with your core values.",
        },
        {
          type: "therapy",
          title: "Gratitude Practice",
          link: "/exercises",
          description: "Sustain your hopeful outlook through daily appreciation practice.",
        },
      ],
    }

    const responsesByEmotion: { [key: string]: string[] } = {
      depression: [
        "I can hear the pain in what you're sharing. What you're feeling is real and valid. Can you tell me how long you've been feeling this way? I'd like to suggest some exercises that might help lift your mood.",
        "Thank you for opening up about this. These feelings are more common than you might think. I'm going to recommend some therapeutic exercises that can help with emotional resilience and self-compassion.",
        "I understand how overwhelming this must feel. Let's work through this together, one step at a time. Try some breathing or a gratitude practice—they can really help shift your emotional state.",
        "This is a difficult time you're going through. But remember, these feelings are temporary, even when they feel permanent. Some grounding exercises and breathing techniques can help you feel more stable.",
        "Your courage in sharing these feelings is admirable. I'd like to suggest some specific exercises and breathing techniques that can help you feel fresher and more hopeful.",
      ],
      anxiety: [
        "Anxiety is a very common experience, and I understand how distressing it can be. Let me recommend some breathing exercises that work quickly for anxiety relief. Can you try one of them right now?",
        "Recognizing your anxiety is the first step. I'd love to guide you through some grounding techniques that can bring you back to the present moment. Would a 5-4-3-2-1 exercise help?",
        "I know this feels overwhelming and endless, but these feelings will pass. Let me suggest some breathing and grounding techniques that have helped many people find relief. Your symptoms will reduce.",
        "Your anxiety is telling you that you care about something. That can actually be positive. Try some box breathing or a grounding exercise—they work within minutes to calm your nervous system.",
        "Can you try one of the breathing exercises I'm recommending? Combined with grounding techniques, they can significantly reduce anxious symptoms and help you feel more in control.",
      ],
      anger: [
        "Your anger is valid. Something has hurt you or feels unfair. Before we talk more, let me suggest some techniques to help you release this tension—breathing and muscle relaxation can work wonders.",
        "I hear your frustration. I'm recommending some exercises that can help you channel this anger constructively. Progressive muscle relaxation can release physical tension associated with anger.",
        "There's power in your anger. Let's channel it in a constructive way by trying some relaxation techniques first. This will help you think more clearly about what's bothering you.",
        "It's completely okay to feel out of control sometimes. Try some deep breathing exercises—they can help you regain emotional control and respond rather than react.",
        "Your feelings are justified. Let me recommend some techniques that can help you move through this anger toward resolution. Belly breathing is particularly effective for anger release.",
      ],
      grief: [
        "I'm so sorry you're experiencing this loss. Grief is profound and touches us deeply. I'd like to suggest some compassionate exercises that can help you process this loss and honor what you've lost.",
        "Grief is a process that takes time. What you're feeling right now is completely natural and valid. These meditation and breathing exercises can provide some comfort during this time.",
        "Memories can be both painful and beautiful. They keep the people or things we love alive in our hearts. Try some loving-kindness meditation to help process your grief with compassion.",
        "Your pain shows the depth of your love. That's something to honor. I'm recommending exercises that can help you work through grief while maintaining connection to your love.",
        "Grief can be a long journey, but it does soften over time. Try these therapeutic exercises to help you move through this process at your own pace with self-compassion.",
      ],
      trauma: [
        "What you experienced was real, and your reactions are completely understandable. Your safety is my priority. I'm recommending grounding exercises and breathing techniques that can help you feel safer in your body.",
        "Healing from trauma is a journey, and you don't have to do it alone. These grounding and breathing exercises can help you feel more present and in control. Would you like to try one now?",
        "I'm here to listen at your pace. There's no rush. These gentle exercises—body scan, grounding, and breathing—can help you reconnect with your body safely.",
        "Your resilience in facing this is remarkable. These grounding and breathing techniques can help you build safety and stability. Start with what feels comfortable for you.",
        "The reactions you're experiencing are normal trauma responses. These specific exercises can help you feel more grounded and secure. Professional trauma therapy is also highly recommended.",
      ],
      shame: [
        "You're not alone in feeling this way. Shame is something many people experience. I'm recommending loving-kindness meditation and self-compassion exercises to help you move through this.",
        "What you're feeling is human and understandable. These exercises can help you show yourself compassion and challenge shame-based thoughts. Would you like to try the loving-kindness meditation?",
        "Shame can make us feel small, but you are significant and worthy. Let's work on building self-compassion through specific exercises and breathing techniques.",
        "Many people feel exactly what you're feeling right now. You're not unique in this, though it might feel that way. Try some thought-challenging to dispute shame-based beliefs.",
        "Your identity isn't defined by your mistakes. These meditation and breathing exercises can help you extend forgiveness to yourself and rebuild your sense of worth.",
      ],
      joy: [
        "I'm so glad you're feeling good! This is a wonderful moment. Let me suggest exercises to help you sustain and amplify this joy in your life.",
        "Your joy is contagious and beautiful. These moments remind us what life is about. Try gratitude practice to deepen this positive feeling.",
        "This is wonderful! Let's celebrate this feeling and build more moments like this through intentional practices.",
        "This happiness comes from within you, and that's beautiful. Use gratitude and values exercises to create more of these joyful moments.",
        "Remember this feeling. It lives within you always. These practices can help you anchor this joy and return to it whenever you need.",
      ],
      hope: [
        "Having hope is such a positive sign. Let's nurture this feeling through values clarification and gratitude practices.",
        "Hope keeps us moving forward. Your positive outlook is really admirable. These exercises can help you build on this momentum.",
        "Hope is a powerful healer. There's no shame in believing things can get better. Let's amplify this feeling with these practices.",
        "You're moving in the right direction. Your hope is valid and deserves to be honored. These exercises can help you stay connected to this feeling.",
        "I'm glad you're looking toward the future. That's a great sign. Let's use these practices to turn hope into action and positive change.",
      ],
      neutral: [
        "I'm here and listening. Can you tell me more about what you're thinking or feeling?",
        "Help me understand better. What's something specific you'd like to talk about?",
        "I'm here for you. What's on your mind today?",
        "Let's explore what you're experiencing. What would be most helpful to discuss?",
        "I'd like to understand you better. Could you share more details about what's happening?",
      ],
    }

    const cognitiveLevelResponses: { [key: string]: string } = {
      catastrophizing:
        "It sounds like you might be imagining the worst-case scenario. But is that really what's most likely to happen? Let's look at what's actually probable. Try the thought-challenging exercise to restructure this thinking pattern.",
      "all-or-nothing":
        "I notice you're seeing things in very black and white terms. But life usually has many shades of gray in between. The thought-challenging exercise can help you develop more balanced perspectives.",
      "mind-reading":
        "You seem to be assuming you know what others are thinking. But we often get these assumptions wrong. The 5-4-3-2-1 grounding technique can help bring you back to reality.",
      personalization:
        "It sounds like you're taking responsibility for things that might not be your fault. Not everything that happens is about you. Loving-kindness meditation can help you develop more compassion for yourself.",
      "should-statements":
        "I hear a lot of pressure and 'shoulds' in what you're saying. But are these expectations realistic? Progressive muscle relaxation can help ease this inner tension.",
    }

    const symptomResponses: { [key: string]: string } = {
      "sleep-disturbance":
        "Sleep problems can be really exhausting. Do you have a regular sleep schedule? Try the 4-7-8 breathing technique or belly breathing before bed—they're very effective for sleep.",
      "cognitive-symptoms":
        "Your mind seems tired right now. This is a common sign of stress and anxiety. Body scan meditation and breathing exercises can help restore mental clarity.",
      "physical-symptoms":
        "Physical discomfort often comes from mental and emotional tension. Progressive muscle relaxation is excellent for releasing this physical tension.",
      "social-withdrawal":
        "Withdrawing when we're struggling is tempting, but isolation can sometimes make things harder. Try some grounding exercises and breathing techniques to help you feel more capable of connecting.",
      "mood-swings":
        "Your emotions are shifting, and that's okay. It's common when we're going through difficult times. These breathing and meditation exercises can help stabilize your mood.",
    }

    let response = ""

    if (symptomClusters.length > 0 && symptomResponses[symptomClusters[0]]) {
      response = symptomResponses[symptomClusters[0]]
      if (recommendationsByEmotion[emotion]) {
        recommendations.push(...recommendationsByEmotion[emotion].slice(0, 2))
      }
    } else if (cognitivePatterns.length > 0 && cognitiveLevelResponses[cognitivePatterns[0]]) {
      response = cognitiveLevelResponses[cognitivePatterns[0]]
      if (recommendationsByEmotion[emotion]) {
        recommendations.push(...recommendationsByEmotion[emotion].slice(0, 2))
      }
    } else {
      const emotionResponses = responsesByEmotion[emotion] || responsesByEmotion.neutral
      response = emotionResponses[Math.floor(Math.random() * emotionResponses.length)]
      if (recommendationsByEmotion[emotion]) {
        recommendations.push(...recommendationsByEmotion[emotion])
      }
    }

    if (severity === "severe") {
      response +=
        " If you're in crisis right now, please reach out to a crisis helpline. In India, you can contact AASRA at 1800-180-1234 or iCall at 9152987821. In other countries, please find your local crisis line."
    } else if (severity === "moderate") {
      response += " Consider trying one of the recommended exercises below—they can really help you feel better."
    }

    return { text: response, recommendations }
  }

  const handleSendMessage = async () => {
    if (!inputText.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputText("")
    setIsTyping(true)

    setTimeout(() => {
      const { text, recommendations } = generateResponse(inputText)
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text,
        sender: "ai",
        timestamp: new Date(),
        recommendations,
      }

      setMessages((prev) => [...prev, aiMessage])
      setIsTyping(false)
    }, 1500)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-orange-100 px-6 py-4 shadow-sm">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="font-pacifico text-2xl text-rose-600">
              LUMIPSYCHE
            </Link>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-600 font-medium">LUMI Online</span>
            </div>
          </div>
          <div className="flex gap-3">
            <Link href="/dashboard" className="text-gray-600 hover:text-rose-600 transition-colors">
              <i className="ri-bar-chart-line text-xl"></i>
            </Link>
            <Link href="/" className="text-gray-600 hover:text-rose-600 transition-colors">
              <i className="ri-home-line text-xl"></i>
            </Link>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-8 max-w-4xl w-full mx-auto">
        <div className="space-y-4">
          {messages.map((msg) => (
            <div key={msg.id}>
              <ChatMessage message={msg} />
              {msg.sender === "ai" && msg.recommendations && msg.recommendations.length > 0 && (
                <div className="mt-4 ml-12 space-y-2">
                  <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Suggested Exercises:</p>
                  <div className="space-y-2">
                    {msg.recommendations.map((rec, idx) => (
                      <Link
                        key={idx}
                        href={rec.link}
                        className="block p-3 bg-rose-50 border border-rose-200 rounded-lg hover:bg-rose-100 transition-colors"
                      >
                        <div className="flex items-start gap-2">
                          <div className="mt-0.5">
                            {rec.type === "breathing" && <i className="ri-wind-line text-rose-600 text-sm"></i>}
                            {rec.type === "exercise" && <i className="ri-fitness-line text-rose-600 text-sm"></i>}
                            {rec.type === "therapy" && <i className="ri-heart-line text-rose-600 text-sm"></i>}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-semibold text-gray-800">{rec.title}</h4>
                            <p className="text-xs text-gray-600 mt-1">{rec.description}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          {isTyping && (
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-rose-600 rounded-full flex items-center justify-center flex-shrink-0">
                <i className="ri-robot-line text-white text-sm"></i>
              </div>
              <div className="bg-white rounded-2xl px-4 py-3 shadow-sm">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input */}
      <div className="bg-white border-t border-orange-100 px-6 py-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex gap-3">
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Tell me what's on your mind..."
              className="flex-1 bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent resize-none"
              rows={3}
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputText.trim() || isTyping}
              className="bg-rose-600 hover:bg-rose-700 disabled:bg-gray-300 text-white px-6 py-3 rounded-2xl font-medium transition-colors flex items-center justify-center h-fit flex-shrink-0"
            >
              <i className="ri-send-plane-2-line text-lg"></i>
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-3 text-center">
            Your conversations are completely private and encrypted.
          </p>
        </div>
      </div>
    </div>
  )
}
