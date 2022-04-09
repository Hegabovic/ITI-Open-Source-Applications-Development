#!/bin/bash
########################### insert data into database
############ files:-
####			$1 : invoice.txt
####			$2 : invoice_data.txt

########## Variables #########
USER=root
PASS=Hegabo192
DB_NAME=invoices
TABLE=invoice
##############################


INV=$(awk '{print "insert into invoices.invoice values("$1",\""$2"\",",""$3");"}' invoice.txt)
echo  ${INV}
INVD=$(awk '{print "insert into invoices.invoice_data values("$1",\""$2"\",",""$3");"}' invoice_data.txt)
mysql -u${USER} -p${PASS} -e "$INV"
mysql -u${USER} -p${PASS} -e "$INVD"

mysql -u${USER} -p${PASS} -e "select * from invoices.invoice"
mysql -u${USER} -p${PASS} -e "select * from invoices.invoice_data"

