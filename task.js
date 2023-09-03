        let task_table = document.getElementById("task_table")
        // let in_td = document.getElementsByClassName("in_td")
        let in_table = document.getElementsByClassName("in_table")
        let img = document.getElementsByTagName("img")
        let photo_show = document.getElementById("photo_show")
        let title_task = document.getElementById("title_task")
        let back = document.getElementById("back")
        let years
        let task
        let final

        let article_first = ["https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/task8%20i.jpg?raw=true","https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/task8%20ii.jpg?raw=true","https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/task8%20ii..jpg?raw=true","2014T8"]
        let article_second = ["https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2015-DSE-ENG-LANG-3-Sample_page-0015.jpg?raw=true","https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2015-DSE-ENG-LANG-3-Sample_page-0016.jpg?raw=true","https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2015-DSE-ENG-LANG-3-Sample_page-0017.jpg?raw=true","https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2015-DSE-ENG-LANG-3-Sample_page-0030.jpg?raw=true","https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2015-DSE-ENG-LANG-3-Sample_page-0031.jpg?raw=true","2015T10"]
        let article_third = ["https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2017-Sample-ENG-Paper3_3.jpg?raw=true","https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2017-Sample-ENG-Paper3_4.jpg?raw=true","https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2017-Sample-ENG-Paper3_9.jpg?raw=true","https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2017-Sample-ENG-Paper3_10.jpg?raw=true","2017T9"]
        let article_fouth = ["https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2019-Sample-ENG-Paper3_4.jpg?raw=true","https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2019-Sample-ENG-Paper3_5.jpg?raw=true","https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2019-Sample-ENG-Paper3_11.jpg?raw=true","https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2019-Sample-ENG-Paper3_12.jpg?raw=true","2019T9"]
        let article_fiveth = ["https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2012%20HKDSE%20English%20Language%20Exemplars_pages-to-jpg-0010.jpg?raw=true","https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2012%20HKDSE%20English%20Language%20Exemplars_pages-to-jpg-0011.jpg?raw=true","https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2012%20HKDSE%20English%20Language%20Exemplars_pages-to-jpg-0014.jpg?raw=true","https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2012%20HKDSE%20English%20Language%20Exemplars_pages-to-jpg-0022.jpg?raw=true","https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2012%20HKDSE%20English%20Language%20Exemplars_pages-to-jpg-0023.jpg?raw=true","https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2012%20HKDSE%20English%20Language%20Exemplars_pages-to-jpg-0026.jpg?raw=true","2012T9"]
        let article_sixth = ["https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2012%20HKDSE%20English%20Language%20Exemplars_pages-to-jpg-0012.jpg?raw=true","https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2012%20HKDSE%20English%20Language%20Exemplars_pages-to-jpg-0013.jpg?raw=true","https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2012%20HKDSE%20English%20Language%20Exemplars_pages-to-jpg-0014.jpg?raw=true","https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2012%20HKDSE%20English%20Language%20Exemplars_pages-to-jpg-0024.jpg?raw=true","https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2012%20HKDSE%20English%20Language%20Exemplars_pages-to-jpg-0025.jpg?raw=true","https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2012%20HKDSE%20English%20Language%20Exemplars_pages-to-jpg-0026.jpg?raw=true","2012T10"]
        let article_seventh = ["https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/task8.jpg?raw=true","2013T8"]
        let article_eighth = ["https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/task10.jpg?raw=true","https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/task10..jpg?raw=true","2013T10"]

        let report_first = ["https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2017-Sample-ENG-Paper3_1.jpg?raw=true","https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2017-Sample-ENG-Paper3_2.jpg?raw=true","https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2017-Sample-ENG-Paper3_7.jpg?raw=true","https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2017-Sample-ENG-Paper3_8.jpg?raw=true","2017T8"]
        let report_second = ["https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2018-Sample-ENG-Paper3_1.jpg?raw=true","https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2018-Sample-ENG-Paper3_2.jpg?raw=true","https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2018-Sample-ENG-Paper3_5.jpg?raw=true","https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2018-Sample-ENG-Paper3_6.jpg?raw=true","2018T8"]
        let report_third = ["https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2019-Sample-ENG-Paper3_1.jpg?raw=true","https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2019-Sample-ENG-Paper3_2.jpg?raw=true","https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2019-Sample-ENG-Paper3_3.jpg?raw=true","https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2019-Sample-ENG-Paper3_8.jpg?raw=true","https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2019-Sample-ENG-Paper3_9.jpg?raw=true","https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2019-Sample-ENG-Paper3_10.jpg?raw=true","2019T8"]
        let report_fouth = ["https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/task9%20tbc.jpg?raw=true","https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/task9..jpg?raw=true","2020T9"]

        let letter_first = ["https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/task10%20i.jpg?raw=true","https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/task10%20i..jpg?raw=true","https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/task10%20ii.jpg?raw=true","https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/task10..jpg?raw=true","2014T10"]
        let letter_second = ["https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2017-Sample-ENG-Paper3_5.jpg?raw=true","https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2017-Sample-ENG-Paper3_6.jpg?raw=true","https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2017-Sample-ENG-Paper3_11.jpg?raw=true","https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2017-Sample-ENG-Paper3_12.jpg?raw=true","2017T10"]
        let letter_third = ["https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2021%20(1).jpg?raw=true","https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2021%20(5).jpg?raw=true","2021T9"]

        let email_first = ["https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/task9.jpg?raw=true","2013T9"]
        let email_second = ["https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2016-Sample-ENG-Paper3_1.jpg?raw=true","https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2016-Sample-ENG-Paper3_2.jpg?raw=true","https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2016-Sample-ENG-Paper3_7.jpg?raw=true","https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2016-Sample-ENG-Paper3_7.jpg?raw=true","2016T8"]
        let email_third = ["https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/task10%20tbc.jpg?raw=true","https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/task10..jpg?raw=true","2020T10"]
        let email_fouth = ["https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2022-Sample-ENG-Paper3_3.jpg?raw=true","https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2022-Sample-ENG-Paper3_4.jpg?raw=true", "https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2022-Sample-ENG-Paper3_9.jpg?raw=true","https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2022-Sample-ENG-Paper3_10.jpg?raw=true","2022T9"]
        let email_fiveth = ["https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2015-DSE-ENG-LANG-3-Sample_page-0011.jpg?raw=true","https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2015-DSE-ENG-LANG-3-Sample_page-0012.jpg?raw=true","https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2015-DSE-ENG-LANG-3-Sample_page-0026.jpg?raw=true","https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2015-DSE-ENG-LANG-3-Sample_page-0027.jpg?raw=true","2015T8"]
        let email_sixth = ["https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2015-DSE-ENG-LANG-3-Sample_page-0013.jpg?raw=true","https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2015-DSE-ENG-LANG-3-Sample_page-0014.jpg?raw=true","https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2015-DSE-ENG-LANG-3-Sample_page-0028.jpg?raw=true","https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2015-DSE-ENG-LANG-3-Sample_page-0029.jpg?raw=true","2015T9"]
        let email_seventh = ["https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2018-Sample-ENG-Paper3_4.jpg?raw=true","https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2018-Sample-ENG-Paper3_9.jpg?raw=true","https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2018-Sample-ENG-Paper3_10.jpg?raw=true","2018T10"]
        let email_eighth = ["https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2018-Sample-ENG-Paper3_3.jpg?raw=true","https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2018-Sample-ENG-Paper3_7.jpg?raw=true","https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2018-Sample-ENG-Paper3_8.jpg?raw=true","2018T9"]
        let email_nineth = ["https://raw.githubusercontent.com/nutureSelection/dse_listening_task.github.io/main/2021%20(5).jpg","https://raw.githubusercontent.com/nutureSelection/dse_listening_task.github.io/main/2021%20(6).jpg","2021T8"]
        let email_tenth = ["https://raw.githubusercontent.com/nutureSelection/dse_listening_task.github.io/main/2021%20(3).jpg","2021T10"]

        let mainbody_first = ["https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2012%20HKDSE%20English%20Language%20Exemplars_pages-to-jpg-0009.jpg?raw=true","https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2012%20HKDSE%20English%20Language%20Exemplars_pages-to-jpg-0014.jpg?raw=true","https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2012%20HKDSE%20English%20Language%20Exemplars_pages-to-jpg-0021.jpg?raw=true","https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2012%20HKDSE%20English%20Language%20Exemplars_pages-to-jpg-0026.jpg?raw=true","2012T8"]
        let mainbody_second = ["https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2022-Sample-ENG-Paper3_1.jpg?raw=true","https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2022-Sample-ENG-Paper3_2.jpg?raw=true","https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2022-Sample-ENG-Paper3_7.jpg?raw=true","https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2022-Sample-ENG-Paper3_8.jpg?raw=true","2022T8"]
        let mainbody_third = ["https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2016-Sample-ENG-Paper3_3.jpg?raw=true","https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2016-Sample-ENG-Paper3_4.jpg?raw=true","https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2016-Sample-ENG-Paper3_9.jpg?raw=true","https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2016-Sample-ENG-Paper3_10.jpg?raw=true","2016T9"]
        let mainbody_fourth = ["https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2016-Sample-ENG-Paper3_5.jpg?raw=true","https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2016-Sample-ENG-Paper3_6.jpg?raw=true","https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2016-Sample-ENG-Paper3_11.jpg?raw=true","https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2016-Sample-ENG-Paper3_12.jpg?raw=true","2016T10"]

        let speech_first = ["https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/task9%20i.jpg?raw=true","https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/task9%20i..jpg?raw=true","https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/task9%20ii.jpg?raw=true","https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/task9%20ii..jpg?raw=true","2014T9"]
        let speech_second = ["https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2019-Sample-ENG-Paper3_6.jpg?raw=true","https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2019-Sample-ENG-Paper3_7.jpg?raw=true","https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2019-Sample-ENG-Paper3_13.jpg?raw=true","https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2019-Sample-ENG-Paper3_14.jpg?raw=true","https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2019-Sample-ENG-Paper3_15.jpg?raw=true","2019T10"]
        let speech_third = ["https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2022-Sample-ENG-Paper3_5.jpg?raw=true","https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2022-Sample-ENG-Paper3_6.jpg?raw=true","https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2022-Sample-ENG-Paper3_11.jpg?raw=true","https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2022-Sample-ENG-Paper3_12.jpg?raw=true","https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2022-Sample-ENG-Paper3_23.jpg?raw=true","https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/2022-Sample-ENG-Paper3_24.jpg?raw=true","2022T10"]

        let script_first = ["https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/task8%20tbc.jpg?raw=true","https://github.com/nutureSelection/dse_listening_task.github.io/blob/main/task8..jpg?raw=true","2020T8"]

        let all_list_name = [article_first,article_second,article_third,article_fouth,report_first,report_second,report_third,report_fouth,letter_first,letter_second,letter_third,email_first,email_second,email_third,email_fouth,mainbody_first,mainbody_second,speech_first,speech_second,speech_third,script_first,article_fiveth,article_sixth,article_seventh,article_eighth,email_fiveth,email_sixth,email_seventh,email_eighth,email_nineth,email_tenth,mainbody_third,mainbody_fourth]
        
        // console.log(in_table[0].rows[0].cells[0].innerText)
        // console.log(task_table.rows[2].cells[1].rows[0].cells[0].innerText)
        // console.log(task_table.rows[2].cells[2])
        // task_table.addEventListener("touchend")
        for(let i = 0;i<13;i++){
            //列   直
            for(let x = 0;x<11;x++){
                //栏   横
                for(let b=0;b<6;b++){
                    // in table
                    for(let c=0;c<2;c++){
                        let choose = task_table.rows[i].cells[x]
                        // let in_year = task_table.rows[i].cells[x].innerText
                        let in_task_name = task_table.rows[0].cells[x].innerText
                        choose.addEventListener("click",function(){

                            task = choose.innerText
                            years = task_table.rows[i].cells[0].innerText
                            let task_name = task_table.rows[0].cells[x].innerText

                            let final = years+task
                            // console.log(final)
                            // final_list.push(final)
                            // console.log(final_list)
                            
                            if(final.length==6||final.length==7){
                                //表格显示的更改
                                title_task.innerText = years+" "+task+" "+task_name
                                photo_show.style.display = "inline"
                                task_table.style.display = "none"

                                for(let a=0;a<all_list_name.length;a++){
                                    let task_foucs = all_list_name[a][all_list_name[a].length-1]
                                    let task_foucs_list = all_list_name[a]
                                    if(final==task_foucs){
                                        for(let y = 0;y<=task_foucs_list.length;y++){
                                            // console.log(task_foucs.length)
                                            if(y != task_foucs_list.length-1){
                                                img[y].src = task_foucs_list[y]
                                            }
                                            else{
                                                return
                                            }
                                        }
                                    }
                                }
                            }
                        })
                        let in_choose = in_table[b].rows[c].cells[0]
                        let in_tasks_name = ["Article","Article","Main body","Email","Email","Email"]
                        let in_years_name = ["2012","2013","2015","2016","2018","2021"]
                        in_choose.addEventListener("click",function(){
                            let task_name = in_tasks_name[b]
                            let in_year = in_years_name[b]
                            task = in_choose.innerText
                            // years = task_table.rows[i].cells[0].innerText
                            let in_final = in_year+in_choose.innerText
                            // console.log(in_final.length)
                            
                            if(in_final.length==6 || in_final.length==7){
                                //表格显示的更改
                                title_task.innerText = in_year+" "+task+" "+task_name
                                photo_show.style.display="inline"
                                task_table.style.display = "none"
                                for(let a=0;a<all_list_name.length;a++){
                                    let task_foucs = all_list_name[a][all_list_name[a].length-1]
                                    let task_foucs_list = all_list_name[a]
                                    // console.log(task_foucs_list.length)
                                    if(in_final==task_foucs){
                                        for(let y = 0;y<=task_foucs_list.length-2;y++){
                                            // console.log(task_foucs.length)
                                            if(y != task_foucs_list.length-1){
                                                img[y].src = task_foucs_list[y]
                                            }
                                            else{
                                                return
                                            }
                                        }
                                    }
                                }
                            }
                        })
                    }
                }
            }
        }
        setInterval(function(){
            if(back.style.display!="none"){
                if(window.innerWidth>window.innerHeight){
                    back.style.top = "5%"
                }
                else{
                    back.style.top = "3%"
                }
            }
        },1000)
        back.addEventListener("click",function(){
            photo_show.style.display = "none"
            task_table.style.display = "inline"
        })
