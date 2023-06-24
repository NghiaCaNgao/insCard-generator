const url_input = document.getElementById("url_input");
const avt_input = document.getElementById("avt_input");
const name_input = document.getElementById("name_input");
const posts_input = document.getElementById("posts_input");
const followers_input = document.getElementById("followers_input");
const followings_input = document.getElementById("followings_input");
const label_posts = document.getElementById("label_posts");
const label_followers = document.getElementById("label_followers");
const label_followings = document.getElementById("label_followings");
const label_name = document.getElementById("label_name");
const bg_img = document.getElementById("bg_img");
const fore_img = document.getElementById("fore_img");
const download_btn = document.getElementById("download");
const status_btn = document.getElementById("status_btn");
const avatar_2 = document.getElementById("avatar_2");
const avatar_1 = document.getElementById("avatar_1");
const url_upload_input = document.getElementById("url_upload_input");

const DEFAULT_URL = "https://www.wbcsd.org/var/site/storage/images/media/page-assets/new-projects/nature-action/targets-monitoring-and-reporting/154616-1-eng-GB/Targets-monitoring-and-reporting_720_square.jpg";
const AVATAR_URL = "https://upload.wikimedia.org/wikipedia/commons/6/66/Square_Panorama_of_Aru_Valley%2C_Jammu_and_Kashmir%2C_India.jpg";
const DEFAULT_NAME = "nghia.cangao"

let local_image_url = localStorage.getItem("img_url");
let local_avatar_url = localStorage.getItem("avt_url");
let local_name = localStorage.getItem("name");

let img_url = local_image_url && local_image_url.trim() != ""
    ? localStorage.getItem("img_url")
    : DEFAULT_URL;
let avt_url = local_avatar_url && local_avatar_url.trim() != ""
    ? localStorage.getItem("avt_url")
    : AVATAR_URL;
let name = local_name && local_name.trim() != ""
    ? localStorage.getItem("name")
    : DEFAULT_NAME;

change_image(img_url)
change_avatar(avt_url)
change_name(name)

url_input.addEventListener('change', () => {
    localStorage.setItem("img_url", url_input.value)
    change_image(url_input.value)
})
name_input.addEventListener('change', () => {
    localStorage.setItem("name", name_input.value)
    change_name(name_input.value)
})

avt_input.addEventListener('change', () => {
    localStorage.setItem("avt_url", avt_input.value)
    change_avatar(avt_input.value)
})

url_upload_input.addEventListener("change", () => {
    const file = url_upload_input.files[0];
    const reader = new FileReader();

    reader.onloadend = function () {
        console.log("Lo");
        localStorage.setItem("img_url", reader.result)
        change_image(reader.result)
    }

    if (file) {
        reader.readAsDataURL(file);
    }
})

posts_input.addEventListener("change", () => {
    label_posts.innerHTML = posts_input.value.trim() !== "" ? posts_input.value.trim() : "42"
})

followers_input.addEventListener("change", () => {
    label_followers.innerHTML = followers_input.value.trim() !== "" ? followers_input.value.trim() : "16"
})

followings_input.addEventListener("change", () => {
    label_followings.innerHTML = followings_input.value.trim() !== "" ? followings_input.value.trim() : "45k"
})

function change_image(url) {
    bg_img.style.backgroundImage = `url("${url}")`
    fore_img.style.backgroundImage = `url("${url}")`
}
function change_avatar(url) {
    avatar_1.src = url
    avatar_2.src = url
}
function change_name(name) {
    label_name.innerText = name
}

download_btn.addEventListener("click", () => {
    url_input.disabled = true;
    posts_input.disabled = true;
    avt_input.disabled = true;
    followers_input.disabled = true;
    followings_input.disabled = true;
    status_btn.innerText = "Loading..."

    htmlToImage.toPng(bg_img)
        .then(function (dataUrl) {
            download(dataUrl, 'insCard.png');

            url_input.disabled = false;
            avt_input.disabled = false;
            posts_input.disabled = false;
            followers_input.disabled = false;
            followings_input.disabled = false;
            status_btn.innerText = "Download"
        })
        .catch(function (error) {
            console.error('oops, something went wrong!', error);
        });
})