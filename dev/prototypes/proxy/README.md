# OOD Secured Passenger App To Connect To External Systems

This is a prototype of a passenger app that runs as a system user and can securely store and user secrets.
To make the passenger app run as a system user, we need to add a Lua script to fix the user before the request is executed by the OOD Lua handler.

This creates an nginx and the application with this fix user permissions.