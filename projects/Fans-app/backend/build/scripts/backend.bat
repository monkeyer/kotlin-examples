@if "%DEBUG%" == "" @echo off
@rem ##########################################################################
@rem
@rem  backend startup script for Windows
@rem
@rem ##########################################################################

@rem Set local scope for the variables with windows NT shell
if "%OS%"=="Windows_NT" setlocal

set DIRNAME=%~dp0
if "%DIRNAME%" == "" set DIRNAME=.
set APP_BASE_NAME=%~n0
set APP_HOME=%DIRNAME%..

@rem Add default JVM options here. You can also use JAVA_OPTS and BACKEND_OPTS to pass JVM options to this script.
set DEFAULT_JVM_OPTS=

@rem Find java.exe
if defined JAVA_HOME goto findJavaFromJavaHome

set JAVA_EXE=java.exe
%JAVA_EXE% -version >NUL 2>&1
if "%ERRORLEVEL%" == "0" goto init

echo.
echo ERROR: JAVA_HOME is not set and no 'java' command could be found in your PATH.
echo.
echo Please set the JAVA_HOME variable in your environment to match the
echo location of your Java installation.

goto fail

:findJavaFromJavaHome
set JAVA_HOME=%JAVA_HOME:"=%
set JAVA_EXE=%JAVA_HOME%/bin/java.exe

if exist "%JAVA_EXE%" goto init

echo.
echo ERROR: JAVA_HOME is set to an invalid directory: %JAVA_HOME%
echo.
echo Please set the JAVA_HOME variable in your environment to match the
echo location of your Java installation.

goto fail

:init
@rem Get command-line arguments, handling Windows variants

if not "%OS%" == "Windows_NT" goto win9xME_args

:win9xME_args
@rem Slurp the command line arguments.
set CMD_LINE_ARGS=
set _SKIP=2

:win9xME_args_slurp
if "x%~1" == "x" goto execute

set CMD_LINE_ARGS=%*

:execute
@rem Setup the command line

set CLASSPATH=%APP_HOME%\lib\backend-1.0-SNAPSHOT.jar;%APP_HOME%\lib\common-jvm-1.0-SNAPSHOT.jar;%APP_HOME%\lib\kotlin-stdlib-jdk8-1.2.10.jar;%APP_HOME%\lib\ktor-server-netty-0.9.0.jar;%APP_HOME%\lib\ktor-gson-0.9.0.jar;%APP_HOME%\lib\ktor-auth-0.9.0.jar;%APP_HOME%\lib\ktor-websockets-0.9.0.jar;%APP_HOME%\lib\squash-h2-0.2.3.jar;%APP_HOME%\lib\kotlinx-serialization-runtime-0.2.jar;%APP_HOME%\lib\ktor-server-test-host-0.9.0.jar;%APP_HOME%\lib\ktor-server-host-common-0.9.0.jar;%APP_HOME%\lib\ktor-server-core-0.9.0.jar;%APP_HOME%\lib\ktor-client-apache-0.9.0.jar;%APP_HOME%\lib\squash-jdbc-0.2.3.jar;%APP_HOME%\lib\squash-graph-0.2.3.jar;%APP_HOME%\lib\squash-core-0.2.3.jar;%APP_HOME%\lib\ktor-client-jetty-0.9.0.jar;%APP_HOME%\lib\ktor-client-core-0.9.0.jar;%APP_HOME%\lib\ktor-http-0.9.0.jar;%APP_HOME%\lib\ktor-utils-0.9.0.jar;%APP_HOME%\lib\kotlin-reflect-1.2.10.jar;%APP_HOME%\lib\kotson-2.5.0.jar;%APP_HOME%\lib\logback-classic-1.2.1.jar;%APP_HOME%\lib\HikariCP-2.7.2.jar;%APP_HOME%\lib\kotlin-stdlib-jdk7-1.2.10.jar;%APP_HOME%\lib\kotlin-stdlib-jre8-1.1.51.jar;%APP_HOME%\lib\kotlin-stdlib-jre7-1.1.51.jar;%APP_HOME%\lib\kotlinx-coroutines-jdk8-0.20-alpha-8.jar;%APP_HOME%\lib\kotlinx-coroutines-io-0.20-alpha-8.jar;%APP_HOME%\lib\kotlinx-coroutines-core-0.20-alpha-8.jar;%APP_HOME%\lib\kotlin-test-junit-1.1.51.jar;%APP_HOME%\lib\kotlin-test-1.1.51.jar;%APP_HOME%\lib\kotlin-stdlib-1.2.10.jar;%APP_HOME%\lib\slf4j-api-1.7.25.jar;%APP_HOME%\lib\config-1.3.1.jar;%APP_HOME%\lib\netty-codec-http2-4.1.12.Final.jar;%APP_HOME%\lib\alpn-api-1.1.3.v20160715.jar;%APP_HOME%\lib\gson-2.8.1.jar;%APP_HOME%\lib\json-simple-1.1.1.jar;%APP_HOME%\lib\kotlin-runtime-1.1.50.jar;%APP_HOME%\lib\h2-1.4.191.jar;%APP_HOME%\lib\logback-core-1.2.1.jar;%APP_HOME%\lib\kotlinx-io-jvm-0.0.6.jar;%APP_HOME%\lib\netty-codec-http-4.1.12.Final.jar;%APP_HOME%\lib\netty-handler-4.1.12.Final.jar;%APP_HOME%\lib\httpasyncclient-4.1.3.jar;%APP_HOME%\lib\http2-http-client-transport-9.4.6.v20170531.jar;%APP_HOME%\lib\http2-client-9.4.6.v20170531.jar;%APP_HOME%\lib\jetty-client-9.4.6.v20170531.jar;%APP_HOME%\lib\alpn-boot-8.1.11.v20170118.jar;%APP_HOME%\lib\junit-4.12.jar;%APP_HOME%\lib\annotations-13.0.jar;%APP_HOME%\lib\byte-buddy-1.4.22.jar;%APP_HOME%\lib\netty-codec-4.1.12.Final.jar;%APP_HOME%\lib\netty-transport-4.1.12.Final.jar;%APP_HOME%\lib\netty-buffer-4.1.12.Final.jar;%APP_HOME%\lib\httpcore-nio-4.4.6.jar;%APP_HOME%\lib\httpclient-4.5.3.jar;%APP_HOME%\lib\httpcore-4.4.6.jar;%APP_HOME%\lib\commons-logging-1.2.jar;%APP_HOME%\lib\http2-common-9.4.6.v20170531.jar;%APP_HOME%\lib\jetty-alpn-client-9.4.6.v20170531.jar;%APP_HOME%\lib\http2-hpack-9.4.6.v20170531.jar;%APP_HOME%\lib\jetty-http-9.4.6.v20170531.jar;%APP_HOME%\lib\jetty-io-9.4.6.v20170531.jar;%APP_HOME%\lib\netty-resolver-4.1.12.Final.jar;%APP_HOME%\lib\netty-common-4.1.12.Final.jar;%APP_HOME%\lib\commons-codec-1.9.jar;%APP_HOME%\lib\jetty-util-9.4.6.v20170531.jar;%APP_HOME%\lib\hamcrest-core-1.3.jar

@rem Execute backend
"%JAVA_EXE%" %DEFAULT_JVM_OPTS% %JAVA_OPTS% %BACKEND_OPTS%  -classpath "%CLASSPATH%" com.fans.kotlinconf.backend.ServerKt %CMD_LINE_ARGS%

:end
@rem End local scope for the variables with windows NT shell
if "%ERRORLEVEL%"=="0" goto mainEnd

:fail
rem Set variable BACKEND_EXIT_CONSOLE if you need the _script_ return code instead of
rem the _cmd.exe /c_ return code!
if  not "" == "%BACKEND_EXIT_CONSOLE%" exit 1
exit /b 1

:mainEnd
if "%OS%"=="Windows_NT" endlocal

:omega
