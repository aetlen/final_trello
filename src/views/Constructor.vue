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
                            <input type="radio" name="Src" id="Git"> <label for="Git">Git</label> <br>
                            <input type="radio" name="Src" id="Trello"> <label for="Trello">Trello</label> <br>
                            <input type="radio" name="Src" id="GClassroom"> <label for="GClassroom">GClassroom</label> <br>
                            Выберите диапазон дат: <input type="date" name="calendar_min">-<input type="date" name="calendar_max"> <br>
                            Введите ссылку: <input type="text" name="SrcURL">
                        </td>
                        <td class="CrtTbl">
                            Формат отчета:<br>
                            <input type="radio" name="Form" id="Pdf"> <label for="Pdf">PDF</label> <br>
                            <input type="radio" name="Form" id="Word"> <label for="Word">Word</label> <br>
                            <input type="radio" name="Form" id="Json"> <label for="Json">JSON</label> <br>
                        </td>
                        <td class="CrtTbl">
                            Название отчета:<br>
                            <input type="text" name="RprtName"> <br>
                        </td>
                    </tr>
                </table>
            </center>
            <!--<center> <input value="Сохранить" type="button" id="elem"> </center> -->
            <button v-on:click.prevent="submit">Сохранить</button>
            <hr>
        </form>
    </div>
</template>

<script>
export default {
    name: "Constructor",
    methods: {
        submit() {
            let calendar_min = document.querySelector("[name=calendar_min]");
            let calendar_max = document.querySelector("[name=calendar_max]");
            let src = document.getElementsByName('Src');
            // eslint-disable-next-line no-unused-vars
            let src_num = 0;
            for (let i=0; i<src.length; i++) {
                if (src[i].checked) {
                    src_num = i;
                }
            }
            let form = document.getElementsByName('Form');
            // eslint-disable-next-line no-unused-vars
            let form_num = 0;
            for (let i=0; i<form.length; i++) {
                if (form[i].checked) {
                    form_num = i;
                }
            }
            console.log(calendar_min.value);
            if (calendar_min > calendar_max)
                console.log("yes");
            else
                console.log("yesn't");

            let mail = document.querySelector("[name=StId]");
            let json =
                [{
                    "email": mail.value,
                    "date1": calendar_min.value,
                    "date2": calendar_max.value,
                    "src": src[src_num].id,
                    "form": form[form_num].id
                }]
            this.$http.post('http://jsonplaceholder.typicode.com/posts', {
                json
            }).then(function (json) {
                console.log(json);
            })
        }
    }
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
