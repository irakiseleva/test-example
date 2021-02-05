FROM ubuntu:latest

RUN mkdir /srv/microblog
RUN apt-get update && apt-get install -y python3-pip
ENV FLASK_APP=blog.py

WORKDIR /srv/microblog
RUN touch notes
COPY ./requirements.txt /srv/microblog
RUN pip3 install -r requirements.txt

COPY . /srv/microblog

CMD flask run --host=0.0.0.0