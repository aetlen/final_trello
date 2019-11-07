<template>
    <div id="queue">
        <div id="head">
            <a href="https://www.hse.ru">
                <img src="../images/hse.jpg">
            </a>
            <hr/>
        </div>
        <h2>Готовые отчеты</h2>
            <div id="body">
                <table border="1" width="100%" align="center">
                    <tr>
                        <th>
                            Название отчета
                        </th>
                        <th>
                            Дата создания
                        </th>
                        <th>
                            Студент
                        </th>
                        <th>
                            Источники
                        </th>
                        <th>
                            Формат
                        </th>
                    </tr>
                    <tr>
                        <td>
                            <li>Пример отчета 1</li>
                        </td>
                        <td>
                            01.01.2019
                        </td>
                        <td>
                            Студент 1
                        </td>
                        <td>
                            <li>Git</li>
                            <li>Trello</li>
                            <li>GClassroom</li>
                        </td>
                        <td>
                            PDF
                        </td>
                        <td>
                            <a href=""> <img src="https://cdn1.iconfinder.com/data/icons/arrows-vol-1-4/24/download-512.png" height="30"> </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <li>Пример отчета 2</li>
                        </td>
                        <td>
                            01.01.2019
                        </td>
                        <td>
                            Студент 2
                        </td>
                        <td>
                            <br>
                            <li>GClassroom</li>
                            <br>
                        </td>
                        <td>
                            JSON
                        </td>
                        <td>
                            <a href=""> <img src="http://icons.iconarchive.com/icons/icons8/ios7/512/Programming-Show-Property-icon.png" height="30"> </a>
                        </td>
                    </tr>
                </table>
            </div>
    </div>
</template>

<script>
    export default {
        name: "Queue"
    }
</script>

<style scoped>
    #head {
        background-color: white;
    }

    #body CrtTbl {
        border: 0px;
    }

    #body {
        background: linear-gradient(to top, #ccccff, white);
        font-family: "Arial light", Arial, sans-serif;
    }

    #body table th td {
        border: 1px solid black;
        align-content: center;
    }

    #body td {
        align-content: center;
        margin-left: 5px;
    }

    #body table {
        border-collapse: collapse;
    }
</style>