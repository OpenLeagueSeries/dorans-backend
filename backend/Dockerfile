# pull official base image
FROM python

# set work directory
WORKDIR /app/backend

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# install psycopg2
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        netcat \
    && apt-get install -y --no-install-recommends \
        postgresql-client \
    && rm -rf /var/lib/apt/lists/*

# install dependencies
RUN pip install --upgrade pip
COPY requirements.txt /app/backend
RUN pip install -r requirements.txt

# copy entrypoint.sh
COPY entrypoint.sh /app/backend/entrypoint.sh

# run entrypoint.sh
ENTRYPOINT ["/app/backend/entrypoint.sh"]