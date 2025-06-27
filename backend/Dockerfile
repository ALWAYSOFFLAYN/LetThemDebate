# Use Alpine-based Python image for slimness
FROM python:3.10-alpine

WORKDIR /app

# Copy requirements file and install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy remaining application code
COPY . .

# Specify entry point/command
CMD ["python", "./main.py"]