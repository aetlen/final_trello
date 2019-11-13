<template>
    <div id="constructor">
        <div id="head">
            <a href="https://www.hse.ru">
                <img src="../images/hse.jpg">
            </a>
            <hr/>
        </div>
        <form>
            <h2>Создание отчета</h2>
            <center>
                <table border="1" width="90%" align="center" class="CrtTbl">
                    <tr class="CrtTbl">
                        <td class="CrtTbl">
                            Направление:
                            <select>
                                <option selected>Иформатика и выч. техника</option>
                                <option>Инф. технологии и системы связи</option>
                                <option>...</option>
                            </select>
                            <br>
                            Группа:
                            <select>
                                <option selected>БИВ171</option>
                                <option>БИВ172</option>
                                <option>...</option>
                            </select>
                            <br>
                            ФИО:
                            <select>
                                <option selected>Студент1</option>
                                <option>Студент2</option>
                                <option>...</option>
                            </select>
                            <br/>
                            <hr>
                            Email:
                            <input type="text" name="StId">
                        </td>
                        <td class="CrtTbl">
                            Источники представления:<br>
                            <input type="checkbox" name="Src" id="SrcGit"> <label for="SrcGit">Git</label> <br>
                            <input type="checkbox" name="Src" id="SrcTrello"> <label for="SrcTrello">Trello</label> <br>
                            <input type="checkbox" name="Src" id="SrcGClassroom"> <label for="SrcGClassroom">GClassroom</label> <br>
                            Выберите диапазон дат: <input type="date" name="calendar_min">-<input type="date" name="calendar_max"> <br>
                            Введите ссылку: <input type="text" name="SrcURL">
                        </td>
                        <td class="CrtTbl">
                            Формат отчета:<br>
                            <input type="radio" name="Form" id="FormPdf"> <label for="FormPdf">PDF</label> <br>
                            <input type="radio" name="Form" id="FormWord"> <label for="FormWord">Word</label> <br>
                            <input type="radio" name="Form" id="FormJson"> <label for="FormJson">JSON</label> <br>
                        </td>
                        <td class="CrtTbl">
                            Название отчета:<br>
                            <input type="text" name="RprtName"> <br>
                        </td>
                    </tr>
                </table>
            </center>
            <!-- <center> <input type="submit" value="Сохранить" name="kavo" href="done"> </center> -->
            <button v-on:click="check" class="btn">Сохранить</button>
            <hr>
        </form>
    </div>
</template>

<script>
    /*
    console.log("mhm");
    var calendar_min = document.querySelector("[name=calendar_min]");
    var calendar_max = document.querySelector("[name=calendar_max]");
    methods: {
        check: function() {
            alert ("sho");
            if (calendar_min.getTime() > calendar_max.getTime())
            {
                event.preventDefault();
                alert ("первая дата не должна быть больше второй");
            }
        }
    }
    */
    export default {
        name: "Constructor",
    }
</script>

<style scoped>
    #head {
        background-color: white;
    }

    #body CrtTbl {
        border: 0px;
    }

    #constructor {
        background: linear-gradient(to top, #ccccff, white);
        font-family: "Arial light", Arial, sans-serif;
    }

    #constructor table th td {
        border: 1px solid black;
        align-content: center;
    }

    #constructor td {
        align-content: center;
        margin-left: 5px;
    }

    #constructor table {
        border-collapse: collapse;
    }
</style>