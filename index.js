var express = require("express");
var app = express();
app.use(express.static("public"));
app.set("view engine","ejs");
app.set("views","./views");
app.listen(3000);

var request = require("request");
var cheerio = require("cheerio");

app.get("/", function(req,res){

    request("https://tiki.vn/dien-thoai-may-tinh-bang/c1789?src=mega-menu", function(e,respone,body){
        if(e){
            console.log(e);
            res.render("trangchu",{html:"co loi xay ra"});    
        }else{
            
            $ = cheerio.load(body);
            var ds = $(body).find("span.title");

            // ds.each(function(i,e){
            //     //console.log($(this).text());
            //     //console.log(e["attribs"]["src"]);
            //     console.log(e["attribs"]["href"]);
            // });
            // // console.log(ds);

             //res.render("trangchu",{html:body});
             res.render("trangchu",{html:ds});
            

        }
    });


});