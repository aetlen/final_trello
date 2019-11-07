<template>
    <div id="portfolio">
        <a href="https://www.hse.ru">
            <img src="../images/hse.jpg">
        </a>
        <hr>
        <h2>
            Сафронов Алексей Михайлович
        </h2>
        <hr>
        <h4>
            Я студент
        </h4>
        <h4>
            Обучаюсь на 3 курсе
        </h4>
        <hr>
        <h4>
            <button onclick="window.location='https://www.youtube.com';">Youtube</button>
            <button onclick="window.location='https://vk.com/feed';">Vk</button>
        </h4>
        <hr>
        <h2>
            <img src="../images/photo.jpg">
        </h2>
    </div>
</template>

<script>
    export default {
        name: "Portfolio"
    }
</script>

<style scoped>
     #portfolio {
        background: linear-gradient(to top, #ccccff, white);
    }
    h3 {
        margin: 40px 0 0;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
</style>