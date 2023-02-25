ServerName archive.thedatadungeon.com

DocumentRoot /var/www/archive.thedatadungeon.com/
ServerAdmin hogsy@oldtimes-software.com

Alias "/stats" "/srv/webalizer/archive.thedatadungeon.com"
<Directory "/srv/webalizer/archive.thedatadungeon.com">
	Require all granted
</Directory>

<FilesMatch "\.sources$">
	ForceType text/plain
</FilesMatch>

ErrorLog /var/log/apache2/archive.thedatadungeon.com.error
CustomLog /var/log/apache2/archive.thedatadungeon.com.access combined

<IfModule mod_qos.c>
	# max connection per IP is
	QS_SrvMaxConnPerIP 15
</IfModule>
