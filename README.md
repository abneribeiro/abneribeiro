# abner ribeiro

backend engineer. go, mostly.

## **timeline highlights**

*now:*
-   building [prest](https://github.com/abneribeiro/prest) — restaurant reservations api in go. `net/http` only. no framework, no router library, no orm. three direct dependencies.
-   the interesting part: capacity is aggregate and bookings overlap *partially*. a 19:00–21:00 booking and a 20:00–22:00 booking only compete for one hour. benchmarking three fixes against each other — `tstzrange` exclusion constraints, `SERIALIZABLE` with `40001` retries, and postgres advisory locks.
-   writing 50+ chapters on go, in portuguese — type system, memory model, gc, reflection, `unsafe`, pprof, codegen. advanced go material in portuguese barely exists.
-   running it all on an oracle ampere box i manage myself. arm64, caddy, cloudflare, multi-arch builds.


*2025:*
-   oss contributor to [melkeydev/fu-go](https://github.com/Melkeydev/fu-go), a go cli
-   shipped a three-step validation flow and critical-path guards for destructive file operations — the kind of code where a bug costs someone their files
-   built the automatic backup and logging subsystems behind it, with unit and integration tests

*2024:*
-   full stack for front-end engineers v3 — frontend masters
-   introduction to go

*2023–2026:*
-   b.sc. informatics engineering
-   operating systems, computer networks, oop, databases

## **what i actually care about**

-   the standard library. i reach for a dependency when i've understood what it would have cost me to write it myself.
-   concurrency correctness. race detectors, integration tests against real postgres, and the boring discipline of proving a thing works under load instead of assuming it does.
-   writing it down. if i can't explain a decision in a paragraph, i didn't understand it.

## **stack**

go · postgres · redis · docker · linux · typescript · java · apex

## misc

-   i write at [abneribeiro.com/blog](https://www.abneribeiro.com/blog)