FROM python:3
WORKDIR /app
COPY . /app
RUN pip install --no-cache-dir -r requirements.txt
ENV PORT 30002
EXPOSE ${PORT}
CMD ["python", "waitress_server.py"]