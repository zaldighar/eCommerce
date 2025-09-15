rmdir "\\192.168.1.5\bak\Billy\Desktop" /s/q
rmdir "Z:\Billy\miscellaneous\Location Shortcuts" /s/q
rmdir "S:\Alpha\AADFW\MainV10\LasaldeMelissa" /s/q
robocopy Z:Billy "%USERPROFILE%\Dropbox\AADFW"  /s /xo
robocopy "%USERPROFILE%\Dropbox\AADFW" Z:Billy /s /xo
robocopy Q:\ "%USERPROFILE%\dropbox\Backup\Q Drive" /s /xo
robocopy "Z:\Log Books" "Z:\backups\Log Books Backup" /s /xo
robocopy W: "%USERPROFILE%\dropbox\Backup\W Drive" /s /xo
del "S:\Alpha\AADFW\Backups\MainV10\*.*" /q
xcopy "S:\Alpha\AADFW\MainV10" "S:\Alpha\AADFW\Backups\MainV10" /y/v/d
robocopy "S:\Alpha\AADFW\MainV10" "%USERPROFILE%\Dropbox\AADFW\Computer Drivers\Alpha\MainV10" /xo
Pause

