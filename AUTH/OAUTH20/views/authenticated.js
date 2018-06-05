<!DOCTYPE html>
<html>
  <head>
    <title>Authenticated</title>
  </head>
  <body>
    Authenticated successfully.

    <script type="text/javascript">
      window.opener.authenticateCallback("<%=token%>");  //pass token to prev window
      window.close(); // close this window
    </script>
  </body>
</html>
