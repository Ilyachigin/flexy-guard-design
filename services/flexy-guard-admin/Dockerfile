FROM python:3.6.8-alpine3.9

ENV PYTHONUNBUFFERED 1

ENV APP_NAME /flexy-guard-admin
RUN mkdir /$APP_NAME
WORKDIR /$APP_NAME

COPY requirements.txt ./
RUN pip3     install --no-cache-dir -r requirements.txt

COPY . /$APP_NAME