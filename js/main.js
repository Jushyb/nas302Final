
const topicButtons = [
    { btn: "topicOneBtn",   more: "topicOneMore"   },
    { btn: "topicTwoBtn",   more: "topicTwoMore"   },
    { btn: "topicThreeBtn", more: "topicThreeMore" },
    { btn: "topicFourBtn",  more: "topicFourMore"  },
    { btn: "topicFiveBtn",  more: "topicFiveMore"  },
    { btn: "topicSixBtn",   more: "topicSixMore"   },
];

topicButtons.forEach(function(topic) 
{
    var button = document.getElementById(topic.btn);
    var moreContent = document.getElementById(topic.more);

    if (button && moreContent) 
    {
        button.addEventListener("click", function() 
        {
            if (moreContent.style.display === "none") 
            {
                moreContent.style.display = "block";
                button.textContent = "Show less";
            }
            else
            {
                moreContent.style.display = "none";
                button.textContent = "Read more";
            }
        });
    }
});