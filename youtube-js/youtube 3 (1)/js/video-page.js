




var Feedback = 
[
    {
        person_profile:"https://yt3.ggpht.com/ytc/AIf8zZT9BRAOQmSS0Qd2j9nMBo7BCzsPcE2efM7YquLEGQ=s88-c-k-c0x00ffffff-no-rj",
        alt:"profile-logo",
        person_email:"@Hombalefilms",
        comment:"What is your Favorite scene in Salaar?",
        likes:5,
        dislikes:"<img src=\"./img/thumbs-down-.png\" alt=\"dislike\">",
        reply:"Reply",
    },
    {
        person_profile:"https://yt3.ggpht.com/ytc/AIf8zZRQ987odVHDHWoTKUIqPWdtO3Xum0UO7BoN-EKqbuaNphfgnxupN-AIAWwtE38e=s88-c-k-c0x00ffffff-no-rj",
        alt:"profile-logo",
        person_email:"@mahesh0808",
        comment:"One word to say,Neel Sir you are the master of presentation, I'm eagerly waiting to see the world of khansaar in part 2... Ravi basrur sir you nailed it ❤❤both of you,real asset of our kannada industry... kudos team ❤ bhuvan gowda and shivu Sir also done a fabulous job 🙏🙏",
        likes:5,
        dislikes:1,
        reply:"Reply",
    },
    {
        person_profile:src="https://yt3.ggpht.com/ytc/AIf8zZTMThXrW361Cl3RlWzZ8oSZSii25ax5XnS2ZbMELX2osQKrdkoVQZceeQ1zX2t3=s88-c-k-c0x00ffffff-no-rj",
        alt:"profile-logo",
        person_email:"@suryakiran77",
        comment:"A director and a team who is constantly willing to learn from the past  and progress into the future... Amazing edit and bgm. All the best for Salaar 2.",
        likes:5,
        dislikes:1,
        reply:"Reply",
    },
    {
        person_profile: "https://yt3.ggpht.com/ytc/AIf8zZSt8XfV5u-fdLg5_5oe1PUrCzcDMiUBf5qxnw=s88-c-k-c0x00ffffff-no-rj",
        alt:"profile-logo",
        person_email:"@suryaganesh25",
        comment:"Goosebumps 🔥🔥🤙🤙",
        likes:5,
        dislikes:1,
        reply:"Reply",
    },
    {
        person_profile:"https://yt3.ggpht.com/ytc/AIf8zZQ27lPu3nddjdaYlMaAqajBU1yzcz34czblSGi0=s88-c-k-c0x00ffffff-no-rj",
        alt:"profile-logo",
        person_email:"@Arjun294",
        comment:"PRABHAS + PRASHANT NEEL = PURE GOOSEBUMPS",
        likes:5,
        dislikes:1,
        reply:"Reply",
    },
  
];



function renderReview() {
  var review_section = document.getElementById('review-section');

//   if (!review_section) {
//     console.error("Review section not found");
//     return;
//   }

  var comment_review = review_section.querySelector('.comment-review');

//   if (!comment_review) {
//     // If 'comment-review' element is not found, create it
//     comment_review = document.createElement('div');
//     comment_review.className = 'comment-review';
//     review_section.appendChild(comment_review);
//   }

  let html = '';

  Feedback.forEach((c) => {
    html += `<div class="first-comment">
        <div class="first-prsn-prfl">
            <img src="${c.person_profile}" alt="${c.alt}">
        </div>
        <div class="person-details">
            <div class="person-email">
                <span>${c.person_email}</span>
            </div>
            <div class="comment">
                <p>${c.comment}</p>
            </div>
            <div class="likes-dislikes">
                <img src="./img/like (1).png" alt="like">
                <span>3</span>
                <img src="./img/thumbs-down-.png" alt="dislike">
                <span>${c.reply}</span>
            </div>
        </div>
    </div>`;
  });

  comment_review.innerHTML = html;
}


var Nextplay = [
    {
        video_image:"https://i.ytimg.com/vi/FGleAYHAFro/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDEoXALVj1k3zUY-uQKmQwwe-KX1Q", alt:"Aarya-2",
        description:" Aarya 2 - Uppenantha Video Song | Allu Arjun, Kajal Aggarwal | Devi Sri Prasad | Nede Chudandi",
        channel_name:"Mythri movies",
        views:"335k views",
        days:"5 days ago"
        
    },


    {
        video_image:"https://i.ytimg.com/vi/-7DEJVJG0pc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBNNZai-yfwnh5eic0KPzVtwY2KvQ", alt:"Race Gurram",
        description:" Sweety Sweety Video Song |Race Gurram Video Songs | Allu Arjun, Shruti hassan|S.S Thaman",
        channel_name:"Lahari Music Telugu - TSeries",
        views:"335k views",
        days:"5 days ago"
        
    },

    {
        video_image:"https://i.ytimg.com/vi/h2JH0vqDcYc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDj6yKAc9FCR9cgxOZuuVBKP4ccGw", alt:"Saaho",
        description:"Saaho : Baby Won't You Tell Me Full Video | Prabhas, Shraddha K | Shweta M, Siddharth M, Shankar M",
        channel_name:"T-Series Telugu",
        views:"335k views",
        days:"5 days ago"
        
    },

    {
        video_image:"https://i.ytimg.com/vi/VAdGW7QDJiU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDH2n5mTXbWliyOkhA-l-EPba62oQ", alt:"Jawan",
        description:" JAWAN: Chaleya (Hindi) | Shah Rukh Khan | Nayanthara | Atlee | Anirudh | Arijit S, Shilpa R | Kumaar",
        channel_name:"mythri movies",
        views:"335k views",
        days:"5 days ago"
        
    },
    {
        video_image:"https://i.ytimg.com/vi/RLzC55ai0eo/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBtSyHZtzUbm1sUzuDS7Fw3tpalxw", alt:"Heeriya",
        description:" Heeriye (Official Video) Jasleen Royal ft Arijit Singh| Dulquer Salmaan| Aditya Sharma |Taani Tanvir",
        channel_name:"Jasleen Royal",
        views:"335k views",
        days:"5 days ago"
        
    },
    {
        video_image:"https://i.ytimg.com/vi/HRD2-_bU4K0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAk0qQ9SX2TXFaCExdPaDW7-1oltw", alt:"Bachelor",
        description:"Bachelor | Adiye Lyric Video | G.V. Prakash Kumar | Dhibu Ninan Thomas | Sathish | G Dilli Babu",
        channel_name:"Think Music India",
        views:"335k views",
        days:"5 days ago"
        
    },
    {
        video_image:"https://i.ytimg.com/vi/4jTy5jnMkYc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDeXGSAAMf28GHseplNiit_J_UsPQ", alt:"Takkar",
        description:" Takkar | Nira Song Lyric Video | Siddharth | Sid Sriram | Gautham Menon | Nivas K Prasanna",
        channel_name:"Think Music India",
        views:"335k views",
        days:"5 days ago"
        
    },
    {
        video_image:"https://i.ytimg.com/vi/UgjtxhV08Ao/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAKAJExYpIvN8cPTdd0iqVnaMYtzA", alt:"Doctor",
        description:"Doctor - So Baby Video | Sivakarthikeyan | Anirudh Ravichander | Nelson",
        channel_name:"SonyMusicSouth",
        views:"335k views",
        days:"5 days ago"
        
    },
    {
        video_image:"https://i.ytimg.com/vi/pfQlEHQKnqM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCP2VrJx3GfHDCTrisxE3Tx5q_AxA", alt:"Arjun Reddy",
        description:" Emitemitemito Video Song | Arjun Reddy Video Songs | Vijay Deverakonda | Shalini",
        channel_name:"Aditya Music India",
        views:"335k views",
        days:"5 days ago"
        
    },

    {
        video_image:"https://i.ytimg.com/vi/FGleAYHAFro/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDEoXALVj1k3zUY-uQKmQwwe-KX1Q", alt:"Aarya-2",
        description:" Aarya 2 - Uppenantha Video Song | Allu Arjun, Kajal Aggarwal | Devi Sri Prasad | Nede Chudandi",
        channel_name:"Mythri movies",
        views:"335k views",
        days:"5 days ago"
        
    },

    {
        video_image:"https://i.ytimg.com/vi/h2JH0vqDcYc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDj6yKAc9FCR9cgxOZuuVBKP4ccGw", alt:"Saaho",
        description:"Saaho : Baby Won't You Tell Me Full Video | Prabhas, Shraddha K | Shweta M, Siddharth M, Shankar M",
        channel_name:"T-Series Telugu",
        views:"335k views",
        days:"5 days ago"
        
    },

    {
        video_image:"https://i.ytimg.com/vi/RLzC55ai0eo/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBtSyHZtzUbm1sUzuDS7Fw3tpalxw", alt:"Heeriya",
        description:" Heeriye (Official Video) Jasleen Royal ft Arijit Singh| Dulquer Salmaan| Aditya Sharma |Taani Tanvir",
        channel_name:"Jasleen Royal",
        views:"335k views",
        days:"5 days ago"
        
    },

    

    
]

function renderWholePlayList()
{
    

    var content_list =$(".playlist");
    console.log(content_list);


    let html= '';
    
    Nextplay.map((p)=>
    {
        html += 
        `<div class="playlist">
           <div class="image">
             <img
                src="${p.video_image}"
                alt="${p.alt}"/>
           </div>
            <div class="description">
                  <div class="video-title">
                      <h4> ${p.description}</h4>
                  </div>
                  <div class="video-info">
                      <span>${p.channel_name}</span><br />
                      <span>${p.views}</span>
                      <span>${p.days}</span>
                  </div>
            
           </div>
        </div>
        `;
       

    
    });

    $('.playlist-card').append(html);
    
}





// Call the function when the document is ready
// document.addEventListener('DOMContentLoaded', renderReview);



$(document).ready(function(){    //main DOMReady function
        
    renderWholePlayList();
    renderReview();

})





