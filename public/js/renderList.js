function lesson(target)
{
    let name = target.name;
    let id = target.id;
    let domain_name = window.location.protocol + '//' + window.location.host;
    let url = new URL(domain_name + '/learning/lesson/multiple_choice?q=lesson&id=' + id + '&part=' + name);
    location.assign(url);
}



function lesson_matching(target)
{
    let domain_name = window.location.protocol + '//' + window.location.host;
    let name = target.name;
    let id = target.id;
    let url = new URL(domain_name + '/learning/lesson/matching?q=lesson&id=' + id + '&part=' + name);
    location.assign(url);  
}
