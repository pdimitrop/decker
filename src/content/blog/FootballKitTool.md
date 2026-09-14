---
id: 1
slug: "football-kit-tool-wpf-nightmare"
title: "Football Kit Tool: when a WPF nightmare turns into an invaluable experience"
publishedDate: 2026-09-14
category: "career"
isDraft: true
---

The feeling of finally developing your own app is incomparable; especially for us professional developers, who argue on occasion, fail to find common ground and usually either reach the same conclusion from completely unrelated paths, or face an impasse – for people like me, it is refreshing being the master of a project. Don't get me wrong; I learn so much from interacting with peers and I don't intent on giving up. Company ownership over projects and being handed tasks sometimes takes its toll on people. I began experimenting out of pure curiosity, not while searching for a means of escapism.

When I started my first dev job, I'm not ashamed to admit I had little to no developing experience: notably, I hadn't touched Eclipse since 2018; the last Visual Studio edition I had worked on during my studies was VS 2017; Visual Studio Code was my go-to for my university projects; and Notepad++ was my main web development tool – I attempted and failed many times to set up a mock e-shop using Notepad++, Xampp, and whichever database was required by the university at that moment in time. In short, I wasn't up to speed with what .NET devs worked on. Moreover, I was so focused on web development, I hadn't really given much thought to desktop apps. All of that changed once I became employed as a full-stack developer; my skillset skyrocketed thanks to all the hard work I've been putting on and off work all these months.

## Failure is a design input, not an edge case

The instinct when building something new is to focus on the happy path. You model the system around what should happen, and you treat failure as something to handle later. This is a mistake.

Every component in a system will eventually behave unexpectedly. Networks partition. Disks fill up. Third-party APIs return 500s on a Tuesday afternoon for no documented reason. If your system only knows how to succeed, it will fail catastrophically when reality arrives.

The shift in thinking is subtle but important: stop asking "how does this work?" and start asking "how does this break, and what happens when it does?" Build failure handling as a first-class concern from the start.

## Isolation is your most valuable property

A system that fails entirely because one component fails is a system with no isolation. Resilience comes from drawing hard boundaries between things — ensuring that a failure in one place cannot freely propagate everywhere else.

This shows up in many forms. Circuit breakers that stop hammering a degraded downstream service. Queues that decouple producers from consumers so a slow consumer does not stall the entire pipeline. Separate deployment units so a bad release of one service does not take down an unrelated one.

Isolation is not free. It introduces latency, operational overhead, and complexity in reasoning about your system as a whole. But that cost is almost always worth paying. The alternative is a system where everything fails together.

## Observability is not optional

You cannot fix what you cannot see. This sounds obvious, and yet it is easy to build systems that are deeply opaque — where something clearly went wrong but the logs give you nothing useful to work with.

Good observability means being able to reconstruct what your system was doing at any point in time. It means structured logs you can query, metrics that track the things that actually matter, and traces that let you follow a request across service boundaries. It means dashboards you look at before things go wrong, not only after.

The investment in observability pays for itself the first time you diagnose a production issue in twenty minutes instead of four hours.

## Design for degradation, not just availability

Most systems are built with a binary mental model: either the system is up, or it is down. Resilient systems think in terms of degraded states instead. When a non-critical dependency is unavailable, can the core experience still function? When load exceeds capacity, can the system shed work gracefully rather than collapse entirely?

This thinking leads to features like sensible fallbacks, cached responses for when upstream services are slow, and graceful handling of partial data. Users rarely need everything to work perfectly. They need the most important things to work reliably, and everything else to fail quietly.

## Simplicity is a resilience strategy

The most resilient systems I have encountered share one quality: they are simpler than they needed to be. Not because their builders lacked ambition, but because they understood that every layer of complexity is a new surface for failure.

When you are tempted to add another abstraction, another service, another tool — ask whether the problem genuinely requires it. Often, a well-understood simple solution that you can reason about completely is more resilient than a sophisticated one that nobody fully understands.

Resilience is not something you bolt on after the fact. It is a property you cultivate from the first decision you make about how a system is structured. Build as if failure is certain, because it is.
