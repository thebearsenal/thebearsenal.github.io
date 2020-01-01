function generate_elite_list(commands_list){
    document.getElementById("elite_list").innerHTML  = ""
    for (let each of commands_list){
        document.getElementById("elite_list").innerHTML+= "<div class=\"card\"><div class=\"card-header  bg-primary text-white\">"+
            "Topic: "+each.Topic+"</div><div class=\"card-body\">"+"\""+each.Command+
                " \"</div><div class=\"card-footer  bg-dark text-white\">"+"Comment: "+each.Comment+
                    "</div></div><br>"
    }
}