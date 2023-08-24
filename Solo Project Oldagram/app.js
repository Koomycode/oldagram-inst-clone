const myApp = document.getElementById("app")

const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "Vincent van Gogh.png",
        post: "post-image.png",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "Gustave Courbet.png",
        post: "post-image (1).png",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "Joseph Ducreux.png",
        post: "post-image (2).png",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

function createTextTag(tagName ,elmClass, elmText) {
    const myElement = document.createElement(tagName)
    myElement.classList = `${elmClass}`
    myElement.textContent = `${elmText}`

    return myElement
}

function createDivTag(divClass) {
    const div = document.createElement("div")
    div.classList = `${divClass}`

    return div
}

function createImgTag(imgClass, imgSrc) {
    const img = document.createElement("img")
    img.classList = `${imgClass}`
    img.src = `${imgSrc}`
    return img
}

function createPost(data) {

    /*
    this is the post i want to create:

            <section class="post">
                <div class="post-head">
                    <img src="./Vincent van Gogh.png" alt="" class="post-user-img">
                    <p class="post-username">
                        Vincent van Gogh
                    </p>
                    <p class="post-use-location">
                        Zudert, Netherlands
                    </p>
                </div>

                <div class="relative">
                    <img src="./post-image.png" class="post-img">
                    <i class="absolute-like fa-solid fa-heart bigger"></i>
                </div>

                <div class="post-icons flex">
                    <i class="post-like fa-regular fa-heart"></i>
                    <i class="post-comment fa-regular fa-comment"></i>
                    <img src="./icons (1).png" class="share-icon">
                </div>

                <p class="post-likes">
                    <span class="likes-num">21,492</span>
                    <span>likes</span>
                </p>

                <div class="post-comments">
                    <p class="comment-user">
                        vincey1853
                        <span class="comment">just took a few mushrooms lol</span>
                    </p>
                </div>               
            </section>
    */

    
    const section = document.createElement("section")
    section.classList = "post"

    const firstDiv = createDivTag("post-head")
    const avatarImg = createImgTag("post-user-img", `${data.avatar}`)
    const firstP = createTextTag("p","post-username", data.name)
    const secondP = createTextTag("p","post-use-location", data.location)
    firstDiv.append(avatarImg, firstP, secondP)

    const imgDiv = createDivTag("relative")
    const postImg = createImgTag("post-img", `${data.post}`)
    const heart = document.createElement("i")
    heart.classList = "absolute-like fa-solid fa-heart"
    imgDiv.append(postImg, heart)

    const secondDiv = createDivTag("post-icons flex")
    const like = document.createElement("i")
    like.classList = "post-like fa-regular fa-heart"
    const comment = document.createElement("i")
    comment.classList = "post-comment fa-regular fa-comment"
    const iconImg = createImgTag("share-icon", "./icons (1).png")
    secondDiv.append(like, comment, iconImg)

    const thirdP = createTextTag("p", "post-likes", "")
    const firstSpan = createTextTag("span", "likes-num", data.likes)
    const secondSpan = createTextTag("span", "", "likes")
    thirdP.append(firstSpan, secondSpan)

    const thirdDiv = createDivTag("post-comments")
    const forthP = createTextTag("p", "comment-user", data.username)
    const thirdSpan = createTextTag("span", "comment", data.comment)
    forthP.append(thirdSpan)
    thirdDiv.append(forthP)
    
    function addLike() {
        like.classList.toggle("fa-solid")
        if (like.classList.contains("fa-solid")){
            heart.classList.add("bigger")
            firstSpan.textContent = Number(data.likes) + 1
        } else {
            heart.classList.remove("bigger")
            firstSpan.textContent = Number(data.likes)
        }
    }

    like.addEventListener("click", addLike)
    postImg.addEventListener("dblclick", addLike)

    section.append(firstDiv, imgDiv, secondDiv, thirdP, thirdDiv)

    return section
}


for (const post of posts) {
    myApp.append(createPost(post))
}
