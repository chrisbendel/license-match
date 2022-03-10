## Notes for whoever reads this

- Solved the problem as if I had a 1.5 hours to come up with MVP (More of a proof of concept here)
- Assumptions made (mainly due to time limit)
  - Data coming from some api, logic performed clientside
  - If confidence matching needs to be performed against a larger dataset, typically would do something like this serverside
  - Everything is stringified for simplicity (more time = more specific confidence matching by datatype)
  - Heavy lifting has been done by others (algorithmically), dont waste time on reinventing the wheel

- Vague requirements usually lead me to spend more time communicating about a more clear solution (whether that's with a customer, product owner, etc)
  - Have seen over the years: juniors (and plenty of mid/senior level devs) being given a loosely defined set of work and spending 5x more time on a solution because the definition wasn't clear. Worth spending the extra 1-2 hours clearly defining what the end user needs/wants.
  - In the spirit of a "technical" exercise, I just approached it as if this was a puzzle (i love chess and sudoku). I'm happy to talk more in depth about approaches I would take if the larger scope was more clearly defined, and how I would either
    - A) architect a larger solution (assuming a larger project where this is one component)
    - B) fit this into an existing project