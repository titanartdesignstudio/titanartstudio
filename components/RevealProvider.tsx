"use client"

import { useEffect } from "react"

export default function RevealProvider() {
  useEffect(() => {
    // 🔥 mobile performance optimize
    const isMobile = window.innerWidth < 768

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active")
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: isMobile ? 0.1 : 0.15,
        rootMargin: isMobile ? "0px 0px -20px 0px" : "0px 0px -50px 0px",
      }
    )

    const observe = (el: Element) => {
      if (el.classList.contains("reveal") && !el.classList.contains("active")) {
        observer.observe(el)
      }
    }

    // 🔥 existing elements
    document.querySelectorAll(".reveal").forEach(observe)

    // 🔥 observe future DOM changes
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