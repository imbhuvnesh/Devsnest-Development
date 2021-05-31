from flask import Flask, render_template,request


app = Flask(__name__)

text = ""


@app.route('/')
def restart():
    global text
    text = ""
    return render_template("index.html", var = text)
    

@app.route('/', methods=['POST'])
def index():
    global text
    text += request.form['str']
    return render_template("index.html", var = text)    




if __name__ == '__main__':
    app.run(debug=True)

