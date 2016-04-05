var quotes = [{quote: "Java is to JavaScript what Car is to Carpet.", author: "Chris Heilman"},
{quote: "It's hard enough to find an error in your code when you're looking for it; it's even harder when you've assumed your code is error-free.", author: "Steve McConnell"},
{quote: "If debugging is the process of removing software bugs, then programming must be the process of putting them in.", author: "Edsger Dijkstra"},
{quote: "The best method for accelerating a computer is the one that boosts it by 9.8 m/s2.", author: "Anonymous"},
{quote: "Walking on water and developing software from a specification are easy if both are frozen.", author: "Edward V Berard"},
{quote: "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.", author: "Brian Kernighan"},
{quote: "It's not at all important to get it right the first time. It's vitally important to get it right the last time.", author: "Andrew Hunt and David Thomas"},
{quote: "First, solve the problem. Then, write the code.", author: "John Johnson"},
{quote: "Should array indices start at 0 or 1? My compromise of 0.5 was rejected without, I thought, proper consideration.", author: "Stan Kelly-Bootle"},
{quote: "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.", author: "Rick Osborne"},
{quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", author: "Martin Fowler"},
{quote: "Software sucks because users demand it to.", author: "Nathan Myhrvold"},
{quote: "Linux is only free if your time has no value.", author: "Jamie Zawinski"},
{quote: "Beware of bugs in the above code; I have only proved it correct, not tried it.", author: "Donald Knuth"},
{quote: "There is not now, nor has there ever been, nor will there ever be, any programming language in which it is the least bit difficult to write bad code.", author: "Flon's Law"},
{quote: "The first 90% of the code accounts for the first 90% of the development time. The remaining 10% of the code accounts for the other 90% of the development time.", author: "Tom Cargill"},
{quote: "Good code is its own best documentation. As you're about to add a comment, ask yourself, \"How can I improve the code so that this comment isn't needed?\" Improve the code and then document it to make it even clearer.", author: "Steve McConnell"},
{quote: "Programs must be written for people to read, and only incidentally for machines to execute.", author: "Abelson / Sussman"},
{quote: "Most software today is very much like an Egyptian pyramid with millions of bricks piled on top of each other, with no structural integrity, but just done by brute force and thousands of slaves.", author: "Alan Kay"},
{quote: "Programming can be fun, so can cryptography; however they should not be combined.", author: "Kreitzberg and Shneiderman"},
{quote: "Copy and paste is a design error.", author: "David Parnas"},
{quote: "Before software can be reusable it first has to be usable.", author: "Ralph Johnson"},
{quote: "Without requirements or design, programming is the art of adding bugs to an empty text file.", author: "Louis Srygley"},
{quote: "When someone says, \"I want a programming language in which I need only say what I want done,\" give him a lollipop.", author: "Alan Perlis"},
{quote: "Computers are good at following instructions, but not at reading your mind.", author: "Donald Knuth"},
{quote: "Any code of your own that you haven't looked at for six or more months might as well have been written by someone else.", author: "Alan Perlis"}];


function randomQuote(){
    var item = quotes[Math.floor(Math.random()*quotes.length)];
    return item;
}