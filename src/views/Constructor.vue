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
                            <div
                                    v-for="src in info"
                                    v-bind:key="src.id"
                            >
                                <!-- this should work -->
                                <input type="radio" name="Src" :value="src.name" id="src.description" checked> <label for="src.description">{{src.name}}</label> <br>
                            </div>
                            Выберите диапазон дат: <input type="date" name="calendar_min">-<input type="date" name="calendar_max"> <br>
                            Введите ссылку: <input type="text" name="SrcURL">
                        </td>
                        <td class="CrtTbl">
                            Формат отчета:<br>
                            <input type="radio" name="Form" id="Pdf" checked> <label for="Pdf">PDF</label> <br>
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
    const axios = require('axios').default;
export default {
    name: "Constructor",
    data() {
        return {
            info: null
        };
    },
    mounted() {
        axios
            .get('http://217.73.60.64/api/modules')
            .then(response => (this.info = response.data));
            //if doesn't work, change response.data into response
    },
    methods: {
        submit() {
            let calendar_min = document.querySelector("[name=calendar_min]");
            let calendar_max = document.querySelector("[name=calendar_max]");
            let url = document.querySelector("[name=SrcURL]");
            let doc_name = document.querySelector("[name=RprtName]");

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

            console.log("min = " + calendar_min.value + ", max = " + calendar_max.value);

            if (calendar_min.value>calendar_max.value)
            {
                let a = calendar_max.value;
                calendar_max.value = calendar_min.value;
                calendar_min.value = a;
                console.log("min = " + calendar_min.value + ", max = " + calendar_max.value);
            }
            let mail = document.querySelector("[name=StId]");
            let json =
                [{
                    "email": mail.value,
                    "calendar_min": calendar_min.value,
                    "calendar_max": calendar_max.value,
                    "src": src[src_num].value,
                    "form": form[form_num].id,
                    "url": url.value,
                    "doc_name": doc_name.value
                }]

            axios.post('http://jsonplaceholder.typicode.com/posts', json)
            //    .then(function (response) {console.log(response)});
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
