# Use the `python:3.11` as a source image 
FROM public.ecr.aws/sam/build-python3.11:latest

# Set up an app directory for your code
COPY . /app
WORKDIR /app

# Install `pip` and needed Python packages from `requirements.txt`
RUN cd backend
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Define an entrypoint which will run the main app using the Gunicorn WSGI server.
ENTRYPOINT ["gunicorn", "-b", ":5000", "main:app"]
