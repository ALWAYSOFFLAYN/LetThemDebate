# Use official Nginx alpine image for small size
FROM nginx:alpine

# Copy dist folder contents directly into /usr/share/nginx/html
COPY ./* /usr/share/nginx/html/

# Optionally expose port 29680 explicitly 
EXPOSE 29680

# Start Nginx daemon
CMD ["nginx", "-g", "daemon off;"]