from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")
@app.route("/event-details")
def event_details():
    return render_template("event_details.html")


@app.route("/submit-protest")
def submit_protest():
    return render_template("submit_protest.html")


PROTESTS = {
    "students-march-for-education-rights": {
        "title": "Students' March for Education Rights",
        "category": "Education",
        "date": "December 12",
        "time": "10:00 AM",
        "location": "India Gate, New Delhi",
        "status": "Verified Event",
        "verified": True,
    },
    "climate-action-public-demonstration": {
        "title": "Climate Action Public Demonstration",
        "category": "Environment",
        "date": "December 18",
        "time": "11:00 AM",
        "location": "Jantar Mantar, New Delhi",
        "status": "Verified Event",
        "verified": True,
    },
    "workers-rights-awareness-demonstration": {
        "title": "Workers' Rights Awareness Demonstration",
        "category": "Workers' Rights",
        "date": "December 22",
        "time": "09:00 AM",
        "location": "Gandhi Maidan, Patna",
        "status": "Verified Event",
        "verified": True,
    },
    "principal-removal-protest": {
        "title": "Principal Removal Protest",
        "category": "Education",
        "date": "To be announced",
        "time": "To be announced",
        "location": "Loknayak Jai Prakash Institute of Technology, Chhapra",
        "status": "Awaiting Verification",
        "verified": False,
    },
}


@app.route("/protests/<slug>")
def protest_details(slug):
    protest = PROTESTS.get(slug)
    if protest is None:
        return render_template("protest_not_found.html"), 404
    return render_template("protest_details.html", protest=protest)

if __name__ == "__main__":
    app.run(debug=True)
