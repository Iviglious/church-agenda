
// Function which creates all pages by calling the appropriate functions
function GeneratePages()
{
    var book = document.getElementById("book");
    var pages = [];

    // January
    pages.push(CreateUsualFrontPage("5 Jan 2025", true)); pages.push(CreateUsualBackPage());
    pages.push(CreateUsualFrontPage("12 Jan 2025")); pages.push(CreateUsualBackPage());
    pages.push(CreateUsualFrontPage("19 Jan 2025")); pages.push(CreateUsualBackPage());
    pages.push(CreateUsualFrontPage("26 Jan 2025")); pages.push(CreateUsualBackPage());

    // February
    pages.push(CreateUsualFrontPage("2 Feb 2025", true)); pages.push(CreateUsualBackPage());
    pages.push(CreateUsualFrontPage("9 Feb 2025")); pages.push(CreateUsualBackPage());
    pages.push(CreateUsualFrontPage("16 Feb 2025")); pages.push(CreateUsualBackPage());
    pages.push(CreateUsualFrontPage("23 Feb 2025")); pages.push(CreateUsualBackPage());
    
    // March
    pages.push(CreateUsualFrontPage("2 Mar 2025", true)); pages.push(CreateUsualBackPage());
    pages.push(CreateUsualFrontPage("9 Mar 2025")); pages.push(CreateUsualBackPage());
    pages.push(CreateUsualFrontPage("16 Mar 2025")); pages.push(CreateUsualBackPage());
    pages.push(CreateUsualFrontPage("23 Mar 2025")); pages.push(CreateUsualBackPage());
    pages.push(CreateUsualFrontPage("30 Mar 2025")); pages.push(CreateUsualBackPage());

    // April
    pages.push(CreateGConfFrontPage("6 Apr 2025")); pages.push(CreateBlankBackPage());
    pages.push(CreateUsualFrontPage("13 Apr 2025", true)); pages.push(CreateUsualBackPage());
    pages.push(CreateUsualFrontPage("20 Apr 2025")); pages.push(CreateUsualBackPage());
    pages.push(CreateUsualFrontPage("27 Apr 2025")); pages.push(CreateUsualBackPage());

    // May
    pages.push(CreateUsualFrontPage("4 May 2025", true)); pages.push(CreateUsualBackPage());
    pages.push(CreateUsualFrontPage("11 May 2025")); pages.push(CreateUsualBackPage());
    pages.push(CreateUsualFrontPage("18 May 2025")); pages.push(CreateUsualBackPage());
    pages.push(CreateUsualFrontPage("25 May 2025")); pages.push(CreateUsualBackPage());
    
    // June
    pages.push(CreateSConfFrontPage("1 Jun 2025")); pages.push(CreateUsualBackPage());
    pages.push(CreateUsualFrontPage("8 Jun 2025")); pages.push(CreateUsualBackPage());
    pages.push(CreateUsualFrontPage("15 Jun 2025")); pages.push(CreateUsualBackPage());
    pages.push(CreateUsualFrontPage("22 Jun 2025")); pages.push(CreateUsualBackPage());
    pages.push(CreateUsualFrontPage("29 Jun 2025")); pages.push(CreateUsualBackPage());
    


    // Append all pages to the book
    for (var i = 0; i < pages.length; i++)
    {
        book.appendChild(pages[i]);
    }

}

// Function which creates a HTML element of Usual Front page
function CreateUsualFrontPage(date, testimonies=false)
{
    var page = document.createElement("div");
    page.className = "page";

    var title = "Sacrament Meeting Agenda - Talks";
    var secondPart = `
        <h2>- Talks:</h2>
        <table>
            <tr>
                <th class="speaker">Speaker</th>
                <th>Topic</th>
            </tr>
            <tr>
                <td>1st</td>
                <td></td>
            </tr>
            <tr>
                <td>2nd</td>
                <td></td>
            </tr>
        </table>

        <h2>- Intermediate Hymn: #<normal>${Underscore(5)} Title: ${Underscore(30)}</normal></h2>
        </br>

        <table>
            <tr>
                <th class="speaker">Speaker</th>
                <th>Topic</th>
            </tr>
            <tr>
                <td>3rd</td>
                <td></td>
            </tr>
            <tr>
                <td>4th</td>
                <td></td>
            </tr>
        </table>
        `;
    
    // Check if the page is for testimonies
    if (testimonies)
    {
        title = "Sacrament Meeting Agenda - Testimonies";
        secondPart = `
            <h2>- Testimonies:</h2>
            <table>
                <tr>
                    <td>1.</td>
                    <td>2.</td>
                    <td>3.</td>
                </tr>
                <tr>
                    <td>4.</td>
                    <td>5.</td>
                    <td>6.</td>
                </tr>
                <tr>
                    <td>7.</td>
                    <td>8.</td>
                    <td>9.</td>
                </tr>
                <tr>
                    <td>10.</td>
                    <td>11.</td>
                    <td>12.</td>
                </tr>
            </table>
        `;
    }

    page.innerHTML = `
        <div class="page">
            <h1>${title}</h1>
            <table class="top">
                <tr>
                    <td class="top">Date:</td>
                    <td class="top"><b>${date}</b></td>
                    <td class="top"> </td>
                    <td class="top">Attendance:</td>
                    <td class="top">____ people</td>
                </tr>
                <tr>
                    <td class="top">Presided by: </td>
                    <td class="top">${Underscore(20)}</td>
                    <td class="top"> </td>
                    <td class="top">Organist:</td>
                    <td class="top">${Underscore(20)}</td>
                </tr>
                <tr>
                    <td class="top">Conductor:</td>
                    <td class="top">${Underscore(20)}</td>
                    <td class="top"> </td>
                    <td class="top">Music conductor:</td>
                    <td class="top">${Underscore(20)}</td>
                </tr>
            </table>

            <h2>- Prelude, Greetings and Welcome</h2>
            <h2>- Recognitions: <small>${UnderscoreWithSpace(110)}
            (and the other leaders from the Stake that are with us today)
            </small></h2>

            <h2> Annoucements (see the back for more)</h2>
            <table>
                <tr>
                    <th style="width:10%">Date</th>
                    <th style="width:6%">Day</th>
                    <th style="width:6%">Time</th>
                    <th style="width:18%">Location</th>
                    <th style="width:45%">Event</th>
                    <th style="width:15%">Invited</th>
                </tr>
                ${AddRowsAndColumns(3, 6)}
            </table>

            <h2>- Opening Hymn: #<normal>${Underscore(5)} Title: ${Underscore(30)}</normal></h2>
            <h2>- Invocation: <small>${Underscore(50)}</small></h2>
            </br>

            <h2> Stake Business <normal>- presented by ${Underscore(15)}</normal></h2>
            <h2> Ward Business <normal>- confirmations, callings (see the back side)</normal></h2>
            
            <h2>- Sacrament Hymn: #<normal>${Underscore(5)} Title: ${Underscore(30)}</normal></h2>
            <h2>- (Blessing of the Sacrament)</h2>
            </br>

            ${secondPart}
            </br>

            <h2>- Thanks and farewells</h2>
            <h2>- Closing Hymn: #<normal>${Underscore(5)} Title: ${Underscore(30)}</normal></h2>
            <h2>- Benediction: <small>${Underscore(50)}</small></h2>

        </div>
    `;
    return page;
}


// Function which creates a HTML element of Usual Back page
function CreateUsualBackPage()
{
    var page = document.createElement("div");
    page.className = "page";
    page.innerHTML = `
        <div class="page">
            <h1>Sacrament Meeting Agenda (back)</h1>
            <h2>- Announcements:</h2>
            <table>
                <tr>
                    <th style="width:10%">Date</th>
                    <th style="width:6%">Day</th>
                    <th style="width:6%">Time</th>
                    <th style="width:18%">Location</th>
                    <th style="width:45%">Event</th>
                    <th style="width:15%">Invited</th>
                </tr>
                ${AddRowsAndColumns(7, 6)}
            </table>

            <h2>- Confirmation of Baptism / Blessing of a child: <small>(C - Confirmation, B - Blessing)</small></h2>
            <table>
                <tr>
                    <th style="width:10%">Type</th>
                    <th style="width:60%">Complete Name</th>
                    <th style="width:30%">Designated/Blessed by</th>
                </tr>
                ${AddRowsAndColumns(3, 3)}
            </table>
            </br>
            <b>CONFIRMATION:</b> "It is proposed, that is given a vote of compete acceptance of the new member(s) of Kingston Ward.
                Those who would like to express this, may manifest it."
            </br>
            </br>

            <h2>- Releases and Sustainings of callings: <small>(R - Release, S - Sustaining)</small></h2>
            <table>
                <tr>
                    <th style="width:6%">Type</th>
                    <th style="width:30%">Complete Name</th>
                    <th style="width:30%">Calling</th>
                    <th style="width:12%">Organisation</th>
                    <th style="width:14%">Designated</th>
                    <th style="width:6%">Web</th>
                </tr>
                ${AddRowsAndColumns(7, 6)}
            </table>
            </br>
            <b>RELEASING:</b> "It is proposed that we release with appreciation ( <b>name</b> ) as ( <b>calling</b> ).
                Those who wish to join us in expressing gratitude for their devoted service, please manifest it."
            </br>
            <b>SUSTAINING:</b> "It is proposed that we sustain ( <b>name</b> ) as ( <b>calling</b> ).
                Those in favour, please manifest it (lift your hand and wait for the vote).
                Any opposed may manifest it by the same sign (wait for the vote)."
            </br>
            </br>



        </div>
    `;
    return page;
}

// Function which creates a HTML element of GConf Front page
function CreateGConfFrontPage(date)
{
    var page = document.createElement("div");
    page.className = "page";
    page.innerHTML = `
        <div class="page">
            <h1>General Conference</h1>
            <h3>${date}</h3>
            </br>
            </br>
            </br>
            </br>
            </br>
            </br>
            <div class="image-blurred-edge-g"></div>
        </div>
    `;

    return page;
}

// Function which creates a HTML element of SConf Front page
function CreateSConfFrontPage(date)
{
    var page = document.createElement("div");
    page.className = "page";
    page.innerHTML = `
        <div class="page">
            <h1>Stake Conference</h1>
            <h3>${date}</h3>
            </br>
            </br>
            </br>
            </br>
            </br>
            </br>
            <div class="image-blurred-edge-s"></div>
        </div>
    `;

    return page;
}

// Function which creates a HTML element of Blank Back page
function CreateBlankBackPage()
{
    var page = document.createElement("div");
    page.className = "page";
    page.innerHTML = `
        <div class="page">
        </div>
    `;

    return page;
}


// Creates a string of empty table rows and columns of a given size
function AddRowsAndColumns(rows, columns)
{
    var result = "";
    for (var i = 0; i < rows; i++)
    {
        result += "<tr>";
        for (var j = 0; j < columns; j++)
        {
            result += "<td>&nbsp;</td>";
        }
        result += "</tr>";
    }
    return result;
}

// Creates a string of underscores of a given size
function Underscore(size)
{
    var result = "";
    for (var i = 0; i < size; i++)
    {
        result += "_";
    }
    return result;
}

// Creates a string of underscores with a space in between of a given size
function UnderscoreWithSpace(size)
{
    var result = "";
    for (var i = 0; i < size; i++)
    {
        result += "_ ";
    }
    return result;
}
