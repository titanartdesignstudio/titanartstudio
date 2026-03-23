"use client"

import { useEffect } from "react"

export default function RevealProvider() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active")
            observer.unobserve(entry.target) // once only (premium feel)
          }
        })
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px",
      }
    )

    const observe = (el: Element) => {
      if (el.classList.contains("reveal")) {
        observer.observe(el)
      }
    }

    // 🔥 observe existing
    document.querySelectorAll(".reveal").forEach(observe)

    // 🔥 observe future DOM changes (IMPORTANT)
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) {
            if (node.classList?.contains("reveal")) {
              observe(node)
            }

            node.querySelectorAll?.(".reveal").forEach(observe)
          }
        })
      })
    })

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    })

    return () => {
      observer.disconnect()
      mutationObserver.disconnect()
    }
  }, [])

  return null
}