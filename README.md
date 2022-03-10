## Welcome

Thank you for your time. This short evaluation is meant to verify some of your coding skills in C# and JavaScript/TypeScript.

Your time is valuable and we hope that this test will take you about an hour to complete.

## The Test

Using C# or JavaScript, write a service that provides an "driver's license confidence score" for a given input object. The input object should take a driver's demographic information such as name and date of birth.

The service should, given the input, provide the consumer of the service with a ranked array/enumerable set of objects containing driver licenses and scores from 100 to 0 of how close a particular driver's license matches. 100 is an exact match; 0 is an absolute miss.

Or, in ASCII art psuedo code...
```
{ name, date of birth, ... } --> service --> [ { a license number, confidence score }, { a license number, confidence score }, ... ]
```

Write unit tests for the service, showing a few examples of various confidence score expectations. Mock any data source you need.

The requirements are intentially vague. Use your best judgement to create a solution to this imaginary business problem. Focus more on the overall solution than the specific algorithm if time is short.

## The Projects

Adjacent to this file, you will find two folders: "CSharp" and "JavaScript". These barebones projects are there as your starting point.

Please customize everything you see fit to provide a working solution: Change filenames, add references and modify projects, etc.

## Next Steps

Once you have completed your code, please submit the solution as a .zip file _without assemblies_ to your contact at DealerPolicy.

We look forward to your submission!

Thanks again for your time.

