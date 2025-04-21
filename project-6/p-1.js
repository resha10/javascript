let quotesData = [

    {
        "quote": "Life's most persistent and urgent question is, 'What are you doing for others?",
        "author": "Martin Luther King",
        "profession": "American minister",
        "topics": [
            "Inspirational",
            "Life",
            "People"
        ]
    },
    {
        "quote": "Weak people revenge. Strong people forgive. Intelligent People Ignore.",
        "author": "Albert Einstein",
        "profession": "Theoretical physicist",
        "topics": [
            "Inspirational",
            "Life"
        ]
    },
    {
        "quote": "I have not failed. I've just found 10,000 ways that won't work.",
        "author": "Thomas A. Edison",
        "profession": "American inventor",
        "topics": [
            "Inspirational"
        ]
    },
    {
        "quote": "Genius is one percent inspiration and ninety-nine percent perspiration.",
        "author": "Thomas A. Edison",
        "profession": "American inventor",
        "topics": [
            "Inspirational",
            "Wisdom"
        ]
    },
    {
        "quote": "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
        "author": "Thomas A. Edison",
        "profession": "American inventor",
        "topics": [
            "Inspirational",
            "Advice"
        ]
    },
    {
        "quote": "If we did all the things we are capable of, we would literally astound ourselves.",
        "author": "Thomas A. Edison",
        "profession": "American inventor",
        "topics": [
            "Inspirational"
        ]
    },
    {
        "quote": "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
        "author": "Albert Einstein",
        "profession": "Theoretical physicist",
        "topics": [
            "Inspirational",
            "Wisdom"
        ]
    },
    {
        "quote": "Life isn't about finding yourself. Life is about creating yourself.",
        "author": "George Bernard Shaw",
        "profession": "Irish playwright",
        "topics": [
            "Inspirational",
            "Life",
            "Advice"
        ]
    },
   
]

let index = 0;
function generateQuotes(index){
    document.getElementById("Quotes").innerHTML = `"${quotesData[index].quote}"`
    document.getElementById("authorName").innerHTML = `- ${quotesData[index].author}`

}
function prevIndex()
{
    if(index == 0)
    {
        index = quotesData.length - 1;
    }else
    {
        index--;
    }
    generateQuotes(index);
}
function nextIndex()
{
    if(index >= quotesData.length - 1)
    {
        index = 0;
    }else 
    {
        index++;
    }
    generateQuotes(index);
}
generateQuotes(index);