---
aside: true
---

# Bridge Functions

Bridge functions are functions that are available to the bridge. They are used to interact with the bridge.

## MQL5 Functions

:::warning Content Copyright
This content comes from MQL5 Documentation and is subject to the [MQL5 Terms](https://www.mql5.com/en/about/terms).
:::

The following functions are available to the bridge:
| Function | Action | Section |
| --- | --- | --- |
| [AccountInfoDouble](/en/bridge/functions/mql5/account/accountinfodouble) | Returns a value of double type of the corresponding account property | [Account Information](/en/bridge/functions/mql5/account) |
| [AccountInfoInteger](/en/bridge/functions/mql5/account/accountinfointeger) | Returns a value of integer type (bool, int or long) of the corresponding account property | [Account Information](/en/bridge/functions/mql5/account) |
| [AccountInfoString](/en/bridge/functions/mql5/account/accountinfostring) | Returns a value string type corresponding account property | [Account Information](/en/bridge/functions/mql5/account) |
| [acos](/en/bridge/functions/mql5/math/matharccos) | Returns the arc cosine of x in radians | [Math Functions](/en/bridge/functions/mql5/math) |
| [Alert](/en/bridge/functions/mql5/common/alert) | Displays a message in a separate window | [Common Functions](/en/bridge/functions/mql5/common) |
| [ArrayBsearch](/en/bridge/functions/mql5/array/arraybsearch) | Searches for a specified value in a multidimensional numeric array sorted ascending | [Array Functions](/en/bridge/functions/mql5/array) |
| [ArrayCompare](/en/bridge/functions/mql5/array/arraycompare) | Returns the result of comparing two arrays of [simple types](/en/bridge/functions/mql5/basis/types#base_types) or custom structures without [complex objects](/en/bridge/functions/mql5/basis/types#complex_types) | [Array Functions](/en/bridge/functions/mql5/array) |
| [ArrayCopy](/en/bridge/functions/mql5/array/arraycopy) | Copies one array into another | [Array Functions](/en/bridge/functions/mql5/array) |
| [ArrayFill](/en/bridge/functions/mql5/array/arrayfill) | Fills an array with the specified value | [Array Functions](/en/bridge/functions/mql5/array) |
| [ArrayFree](/en/bridge/functions/mql5/array/arrayfree) | Frees up buffer of any dynamic array and sets the size of the zero dimension in 0. | [Array Functions](/en/bridge/functions/mql5/array) |
| [ArrayGetAsSeries](/en/bridge/functions/mql5/array/arraygetasseries) | Checks direction of array indexing | [Array Functions](/en/bridge/functions/mql5/array) |
| [ArrayInitialize](/en/bridge/functions/mql5/array/arrayinitialize) | Sets all elements of a numeric array into a single value | [Array Functions](/en/bridge/functions/mql5/array) |
| [ArrayIsDynamic](/en/bridge/functions/mql5/array/arrayisdynamic) | Checks whether an array is dynamic | [Array Functions](/en/bridge/functions/mql5/array) |
| [ArrayIsSeries](/en/bridge/functions/mql5/array/arrayisseries) | Checks whether an array is a timeseries | [Array Functions](/en/bridge/functions/mql5/array) |
| [ArrayMaximum](/en/bridge/functions/mql5/array/arraymaximum) | Searches for the largest element in the first dimension of a multidimensional numeric array | [Array Functions](/en/bridge/functions/mql5/array) |
| [ArrayMinimum](/en/bridge/functions/mql5/array/arrayminimum) | Searches for the lowest element in the first dimension of a multidimensional numeric array | [Array Functions](/en/bridge/functions/mql5/array) |
| [ArrayRange](/en/bridge/functions/mql5/array/arrayrange) | Returns the number of elements in the specified dimension of the array | [Array Functions](/en/bridge/functions/mql5/array) |
| [ArrayResize](/en/bridge/functions/mql5/array/arrayresize) | Sets the new size in the first dimension of the array | [Array Functions](/en/bridge/functions/mql5/array) |
| [ArraySetAsSeries](/en/bridge/functions/mql5/array/arraysetasseries) | Sets the direction of array indexing | [Array Functions](/en/bridge/functions/mql5/array) |
| [ArraySize](/en/bridge/functions/mql5/array/arraysize) | Returns the number of elements in the array | [Array Functions](/en/bridge/functions/mql5/array) |
| [ArraySort](/en/bridge/functions/mql5/array/arraysort) | Sorting of numeric arrays by the first dimension | [Array Functions](/en/bridge/functions/mql5/array) |
| [ArrayPrint](/en/bridge/functions/mql5/array/arrayprint) | Prints an array of a simple type or a simple structure into journal | [Array Functions](/en/bridge/functions/mql5/array) |
| [ArrayInsert](/en/bridge/functions/mql5/array/arrayinsert) | Inserts the specified number of elements from a source array to a receiving one starting from a specified index | [Array Functions](/en/bridge/functions/mql5/array) |
| [ArrayRemove](/en/bridge/functions/mql5/array/arrayremove) | Removes the specified number of elements from the array starting with a specified index | [Array Functions](/en/bridge/functions/mql5/array) |
| [ArrayReverse](/en/bridge/functions/mql5/array/array_reverse) | Reverses the specified number of elements in the array starting with a specified index | [Array Functions](/en/bridge/functions/mql5/array) |
| [ArraySwap](/en/bridge/functions/mql5/array/arrayswap) | Swaps the contents of two dynamic arrays of the same type | [Array Functions](/en/bridge/functions/mql5/array) |
| [asin](/en/bridge/functions/mql5/math/matharcsin) | Returns the arc sine of x in radians | [Math Functions](/en/bridge/functions/mql5/math) |
| [atan](/en/bridge/functions/mql5/math/matharctan) | Returns the arc tangent of x in radians | [Math Functions](/en/bridge/functions/mql5/math) |
| [Bars](/en/bridge/functions/mql5/series/bars) | Returns the number of bars the history for a specified symbol and period | [Timeseries and Indicators Access](/en/bridge/functions/mql5/series) |
| [BarsCalculated](/en/bridge/functions/mql5/series/barscalculated) | Returns the number of calculated data in an indicator buffer or -1 in the case of error (data hasn't been calculated yet) | [Timeseries and Indicators Access](/en/bridge/functions/mql5/series) |
| [CalendarCountryById](/en/bridge/functions/mql5/calendar/calendarcountrybyid) | Get a country description by its ID | [Economic Calendar](/en/bridge/functions/mql5/calendar) |
| [CalendarEventById](/en/bridge/functions/mql5/calendar/calendareventbyid) | Get an event description by its ID | [Economic Calendar](/en/bridge/functions/mql5/calendar) |
| [CalendarValueById](/en/bridge/functions/mql5/calendar/calendarvaluebyid) | Get an event value description by its ID | [Economic Calendar](/en/bridge/functions/mql5/calendar) |
| [CalendarCountries](/en/bridge/functions/mql5/calendar/calendarcountries) | Get the array of country names available in the calendar | [Economic Calendar](/en/bridge/functions/mql5/calendar) |
| [CalendarEventByCountry](/en/bridge/functions/mql5/calendar/calendareventbycountry) | Get the array of descriptions of all events available in the calendar by a specified country code | [Economic Calendar](/en/bridge/functions/mql5/calendar) |
| [CalendarEventByCurrency](/en/bridge/functions/mql5/calendar/calendareventbycurrency) | Get the array of descriptions of all events available in the calendar by a specified currency | [Economic Calendar](/en/bridge/functions/mql5/calendar) |
| [CalendarValueHistoryByEvent](/en/bridge/functions/mql5/calendar/calendarvaluehistorybyevent) | Get the array of values for all events in a specified time range by an event ID | [Economic Calendar](/en/bridge/functions/mql5/calendar) |
| [CalendarValueHistory](/en/bridge/functions/mql5/calendar/calendarvaluehistory) | Get the array of values for all events in a specified time range with the ability to sort by country and/or currency | [Economic Calendar](/en/bridge/functions/mql5/calendar) |
| [CalendarValueLastByEvent](/en/bridge/functions/mql5/calendar/calendarvaluelastbyevent) | Get the array of event values by its ID since the calendar database status with a specified change_id | [Economic Calendar](/en/bridge/functions/mql5/calendar) |
| [CalendarValueLast](/en/bridge/functions/mql5/calendar/calendarvaluelast) | Get the array of values for all events with the ability to sort by country and/or currency since the calendar database status with a specified change_id | [Economic Calendar](/en/bridge/functions/mql5/calendar) |
| [ceil](/en/bridge/functions/mql5/math/mathceil) | Returns integer numeric value closest from above | [Math Functions](/en/bridge/functions/mql5/math) |
| [CharArrayToString](/en/bridge/functions/mql5/convert/chararraytostring) | Converting symbol code (ansi) into one-symbol array | [Conversion Functions](/en/bridge/functions/mql5/convert) |
| [ChartApplyTemplate](/en/bridge/functions/mql5/chart_operations/chartapplytemplate) | Applies a specific template from a specified file to the chart | [Chart Operations](/en/bridge/functions/mql5/chart_operations) |
| [ChartClose](/en/bridge/functions/mql5/chart_operations/chartclose) | Closes the specified chart | [Chart Operations](/en/bridge/functions/mql5/chart_operations) |
| [ChartFirst](/en/bridge/functions/mql5/chart_operations/chartfirst) | Returns the ID of the first chart of the client terminal | [Chart Operations](/en/bridge/functions/mql5/chart_operations) |
| [ChartGetDouble](/en/bridge/functions/mql5/chart_operations/chartgetdouble) | Returns the double value property of the specified chart | [Chart Operations](/en/bridge/functions/mql5/chart_operations) |
| [ChartGetInteger](/en/bridge/functions/mql5/chart_operations/chartgetinteger) | Returns the integer value property of the specified chart | [Chart Operations](/en/bridge/functions/mql5/chart_operations) |
| [ChartGetString](/en/bridge/functions/mql5/chart_operations/chartgetstring) | Returns the string value property of the specified chart | [Chart Operations](/en/bridge/functions/mql5/chart_operations) |
| [ChartID](/en/bridge/functions/mql5/chart_operations/chartid) | Returns the ID of the current chart | [Chart Operations](/en/bridge/functions/mql5/chart_operations) |
| [ChartIndicatorAdd](/en/bridge/functions/mql5/chart_operations/chartindicatoradd) | Adds an indicator with the specified handle into a specified chart window | [Chart Operations](/en/bridge/functions/mql5/chart_operations) |
| [ChartIndicatorDelete](/en/bridge/functions/mql5/chart_operations/chartindicatordelete) | Removes an indicator with a specified name from the specified chart window | [Chart Operations](/en/bridge/functions/mql5/chart_operations) |
| [ChartIndicatorGet](/en/bridge/functions/mql5/chart_operations/chartindicatorget) | Returns the handle of the indicator with the specified short name in the specified chart window | [Chart Operations](/en/bridge/functions/mql5/chart_operations) |
| [ChartIndicatorName](/en/bridge/functions/mql5/chart_operations/chartindicatorname) | Returns the short name of the indicator by the number in the indicators list on the specified chart window | [Chart Operations](/en/bridge/functions/mql5/chart_operations) |
| [ChartIndicatorsTotal](/en/bridge/functions/mql5/chart_operations/chartindicatorstotal) | Returns the number of all indicators applied to the specified chart window. | [Chart Operations](/en/bridge/functions/mql5/chart_operations) |
| [ChartNavigate](/en/bridge/functions/mql5/chart_operations/chartnavigate) | Performs shift of the specified chart by the specified number of bars relative to the specified position in the chart | [Chart Operations](/en/bridge/functions/mql5/chart_operations) |
| [ChartNext](/en/bridge/functions/mql5/chart_operations/chartnext) | Returns the chart ID of the chart next to the specified one | [Chart Operations](/en/bridge/functions/mql5/chart_operations) |
| [ChartOpen](/en/bridge/functions/mql5/chart_operations/chartopen) | Opens a new chart with the specified symbol and period | [Chart Operations](/en/bridge/functions/mql5/chart_operations) |
| [CharToString](/en/bridge/functions/mql5/convert/chartostring) | Converting a symbol code into a one-character string | [Conversion Functions](/en/bridge/functions/mql5/convert) |
| [ChartPeriod](/en/bridge/functions/mql5/chart_operations/chartperiod) | Returns the period value of the specified chart | [Chart Operations](/en/bridge/functions/mql5/chart_operations) |
| [ChartPriceOnDropped](/en/bridge/functions/mql5/chart_operations/chartpriceondropped) | Returns the price coordinate of the chart point, the Expert Advisor or script has been dropped to | [Chart Operations](/en/bridge/functions/mql5/chart_operations) |
| [ChartRedraw](/en/bridge/functions/mql5/chart_operations/chartredraw) | Calls a forced redrawing of a specified chart | [Chart Operations](/en/bridge/functions/mql5/chart_operations) |
| [ChartSaveTemplate](/en/bridge/functions/mql5/chart_operations/chartsavetemplate) | Saves current chart settings in a template with a specified name | [Chart Operations](/en/bridge/functions/mql5/chart_operations) |
| [ChartScreenShot](/en/bridge/functions/mql5/chart_operations/chartscreenshot) | Provides a screenshot of the chart of its current state in a GIF, PNG or BMP format depending on specified extension | [Chart Operations](/en/bridge/functions/mql5/chart_operations) |
| [ChartSetDouble](/en/bridge/functions/mql5/chart_operations/chartsetdouble) | Sets the double value for a corresponding property of the specified chart | [Chart Operations](/en/bridge/functions/mql5/chart_operations) |
| [ChartSetInteger](/en/bridge/functions/mql5/chart_operations/chartsetinteger) | Sets the integer value (datetime, int, color, bool or char) for a corresponding property of the specified chart | [Chart Operations](/en/bridge/functions/mql5/chart_operations) |
| [ChartSetString](/en/bridge/functions/mql5/chart_operations/chartsetstring) | Sets the string value for a corresponding property of the specified chart | [Chart Operations](/en/bridge/functions/mql5/chart_operations) |
| [ChartSetSymbolPeriod](/en/bridge/functions/mql5/chart_operations/chartsetsymbolperiod) | Changes the symbol value and a period of the specified chart | [Chart Operations](/en/bridge/functions/mql5/chart_operations) |
| [ChartSymbol](/en/bridge/functions/mql5/chart_operations/chartsymbol) | Returns the symbol name of the specified chart | [Chart Operations](/en/bridge/functions/mql5/chart_operations) |
| [ChartTimeOnDropped](/en/bridge/functions/mql5/chart_operations/charttimeondropped) | Returns the time coordinate of the chart point, the Expert Advisor or script has been dropped to | [Chart Operations](/en/bridge/functions/mql5/chart_operations) |
| [ChartTimePriceToXY](/en/bridge/functions/mql5/chart_operations/charttimepricetoxy) | Converts the coordinates of a chart from the time/price representation to the X and Y coordinates | [Chart Operations](/en/bridge/functions/mql5/chart_operations) |
| [ChartWindowFind](/en/bridge/functions/mql5/chart_operations/chartwindowfind) | Returns the number of a subwindow where an indicator is drawn | [Chart Operations](/en/bridge/functions/mql5/chart_operations) |
| [ChartWindowOnDropped](/en/bridge/functions/mql5/chart_operations/chartwindowondropped) | Returns the number (index) of the chart subwindow, the Expert Advisor or script has been dropped to | [Chart Operations](/en/bridge/functions/mql5/chart_operations) |
| [ChartXOnDropped](/en/bridge/functions/mql5/chart_operations/chartxondropped) | Returns the X coordinate of the chart point, the Expert Advisor or script has been dropped to | [Chart Operations](/en/bridge/functions/mql5/chart_operations) |
| [ChartXYToTimePrice](/en/bridge/functions/mql5/chart_operations/chartxytotimeprice) | Converts the X and Y coordinates on a chart to the time and price values | [Chart Operations](/en/bridge/functions/mql5/chart_operations) |
| [ChartYOnDropped](/en/bridge/functions/mql5/chart_operations/chartyondropped) | Returns the Y coordinate of the chart point, the Expert Advisor or script has been dropped to | [Chart Operations](/en/bridge/functions/mql5/chart_operations) |
| [CheckPointer](/en/bridge/functions/mql5/common/checkpointer) | Returns the type of the object pointer | [Common Functions](/en/bridge/functions/mql5/common) |
| [CLBufferCreate](/en/bridge/functions/mql5/opencl/clbuffercreate) | Creates an OpenCL buffer | [Working with OpenCL](/en/bridge/functions/mql5/opencl) |
| [CLBufferFree](/en/bridge/functions/mql5/opencl/clbufferfree) | Deletes an OpenCL buffer | [Working with OpenCL](/en/bridge/functions/mql5/opencl) |
| [CLBufferRead](/en/bridge/functions/mql5/opencl/clbufferread) | Reads an OpenCL buffer into an array | [Working with OpenCL](/en/bridge/functions/mql5/opencl) |
| [CLBufferWrite](/en/bridge/functions/mql5/opencl/clbufferwrite) | Writes an array into an OpenCL buffer | [Working with OpenCL](/en/bridge/functions/mql5/opencl) |
| [CLContextCreate](/en/bridge/functions/mql5/opencl/clcontextcreate) | Creates an OpenCL context | [Working with OpenCL](/en/bridge/functions/mql5/opencl) |
| [CLContextFree](/en/bridge/functions/mql5/opencl/clcontextfree) | Removes an OpenCL context | [Working with OpenCL](/en/bridge/functions/mql5/opencl) |
| [CLExecute](/en/bridge/functions/mql5/opencl/clexecute) | Runs an OpenCL program | [Working with OpenCL](/en/bridge/functions/mql5/opencl) |
| [CLGetDeviceInfo](/en/bridge/functions/mql5/opencl/clgetdeviceinfo) | Receives device property from OpenCL driver | [Working with OpenCL](/en/bridge/functions/mql5/opencl) |
| [CLGetInfoInteger](/en/bridge/functions/mql5/opencl/clgetinfointeger) | Returns the value of an integer property for an OpenCL object or device | [Working with OpenCL](/en/bridge/functions/mql5/opencl) |
| [CLHandleType](/en/bridge/functions/mql5/opencl/clhandletype) | Returns the type of an OpenCL handle as a value of the ENUM\_OPENCL\_HANDLE_TYPE enumeration | [Working with OpenCL](/en/bridge/functions/mql5/opencl) |
| [CLKernelCreate](/en/bridge/functions/mql5/opencl/clkernelcreate) | Creates an OpenCL start function | [Working with OpenCL](/en/bridge/functions/mql5/opencl) |
| [CLKernelFree](/en/bridge/functions/mql5/opencl/clkernelfree) | Removes an OpenCL start function | [Working with OpenCL](/en/bridge/functions/mql5/opencl) |
| [CLProgramCreate](/en/bridge/functions/mql5/opencl/clprogramcreate) | Creates an OpenCL program from a source code | [Working with OpenCL](/en/bridge/functions/mql5/opencl) |
| [CLProgramFree](/en/bridge/functions/mql5/opencl/clprogramfree) | Removes an OpenCL program | [Working with OpenCL](/en/bridge/functions/mql5/opencl) |
| [CLSetKernelArg](/en/bridge/functions/mql5/opencl/clsetkernelarg) | Sets a parameter for the OpenCL function | [Working with OpenCL](/en/bridge/functions/mql5/opencl) |
| [CLSetKernelArgMem](/en/bridge/functions/mql5/opencl/clsetkernelargmem) | Sets an OpenCL buffer as a parameter of the OpenCL function | [Working with OpenCL](/en/bridge/functions/mql5/opencl) |
| [ColorToARGB](/en/bridge/functions/mql5/convert/colortoargb) | Converting color type to uint type to receive ARGB representation of the color. | [Conversion Functions](/en/bridge/functions/mql5/convert) |
| [ColorToString](/en/bridge/functions/mql5/convert/colortostring) | Converting color value into string as "R,G,B" | [Conversion Functions](/en/bridge/functions/mql5/convert) |
| [Comment](/en/bridge/functions/mql5/common/comment) | Outputs a comment in the left top corner of the chart | [Common Functions](/en/bridge/functions/mql5/common) |
| [CopyBuffer](/en/bridge/functions/mql5/series/copybuffer) | Gets data of a specified buffer from a specified indicator into an array | [Timeseries and Indicators Access](/en/bridge/functions/mql5/series) |
| [CopyClose](/en/bridge/functions/mql5/series/copyclose) | Gets history data on bar closing price for a specified symbol and period into an array | [Timeseries and Indicators Access](/en/bridge/functions/mql5/series) |
| [CopyHigh](/en/bridge/functions/mql5/series/copyhigh) | Gets history data on maximal bar price for a specified symbol and period into an array | [Timeseries and Indicators Access](/en/bridge/functions/mql5/series) |
| [CopyLow](/en/bridge/functions/mql5/series/copylow) | Gets history data on minimal bar price for a specified symbol and period into an array | [Timeseries and Indicators Access](/en/bridge/functions/mql5/series) |
| [CopyOpen](/en/bridge/functions/mql5/series/copyopen) | Gets history data on bar opening price for a specified symbol and period into an array | [Timeseries and Indicators Access](/en/bridge/functions/mql5/series) |
| [CopyRates](/en/bridge/functions/mql5/series/copyrates) | Gets history data of the [Rates](/en/bridge/functions/mql5/constants/structures/mqlrates) structure for a specified symbol and period into an array | [Timeseries and Indicators Access](/en/bridge/functions/mql5/series) |
| [CopyRealVolume](/en/bridge/functions/mql5/series/copyrealvolume) | Gets history data on trade volumes for a specified symbol and period into an array | [Timeseries and Indicators Access](/en/bridge/functions/mql5/series) |
| [CopySpread](/en/bridge/functions/mql5/series/copyspread) | Gets history data on spreads for a specified symbol and period into an array | [Timeseries and Indicators Access](/en/bridge/functions/mql5/series) |
| [CopyTicks](/en/bridge/functions/mql5/series/copyticks) | Gets ticks accumulated by the terminal for the current working session into an array | [Timeseries and Indicators Access](/en/bridge/functions/mql5/series) |
| [CopyTickVolume](/en/bridge/functions/mql5/series/copytickvolume) | Gets history data on tick volumes for a specified symbol and period into an array | [Timeseries and Indicators Access](/en/bridge/functions/mql5/series) |
| [CopyTime](/en/bridge/functions/mql5/series/copytime) | Gets history data on bar opening time for a specified symbol and period into an array | [Timeseries and Indicators Access](/en/bridge/functions/mql5/series) |
| [cos](/en/bridge/functions/mql5/math/mathcos) | Returns the cosine of a number | [Math Functions](/en/bridge/functions/mql5/math) |
| [CryptDecode](/en/bridge/functions/mql5/common/cryptdecode) | Performs the inverse transformation of the data from array | [Common Functions](/en/bridge/functions/mql5/common) |
| [CryptEncode](/en/bridge/functions/mql5/common/cryptencode) | Transforms the data from array with the specified method | [Common Functions](/en/bridge/functions/mql5/common) |
| [CustomSymbolCreate](/en/bridge/functions/mql5/customsymbols/customsymbolcreate) | Create a custom symbol with the specified name in the specified group | [Custom Symbols](/en/bridge/functions/mql5/customsymbols) |
| [CustomSymbolDelete](/en/bridge/functions/mql5/customsymbols/customsymboldelete) | Delete a custom symbol with the specified name | [Custom Symbols](/en/bridge/functions/mql5/customsymbols) |
| [CustomSymbolSetInteger](/en/bridge/functions/mql5/customsymbols/customsymbolsetinteger) | Set the integer type property value for a custom symbol | [Custom Symbols](/en/bridge/functions/mql5/customsymbols) |
| [CustomSymbolSetDouble](/en/bridge/functions/mql5/customsymbols/customsymbolsetdouble) | Set the real type property value for a custom symbol | [Custom Symbols](/en/bridge/functions/mql5/customsymbols) |
| [CustomSymbolSetString](/en/bridge/functions/mql5/customsymbols/customsymbolsetstring) | Set the string type property value for a custom symbol | [Custom Symbols](/en/bridge/functions/mql5/customsymbols) |
| [CustomSymbolSetMarginRate](/en/bridge/functions/mql5/customsymbols/customsymbolsetmarginrate) | Set the margin rates depending on the order type and direction for a custom symbol | [Custom Symbols](/en/bridge/functions/mql5/customsymbols) |
| [CustomSymbolSetSessionQuote](/en/bridge/functions/mql5/customsymbols/customsymbolsetsessionquote) | Set the start and end time of the specified quotation session for the specified symbol and week day | [Custom Symbols](/en/bridge/functions/mql5/customsymbols) |
| [CustomSymbolSetSessionTrade](/en/bridge/functions/mql5/customsymbols/customsymbolsetsessiontrade) | Set the start and end time of the specified trading session for the specified symbol and week day | [Custom Symbols](/en/bridge/functions/mql5/customsymbols) |
| [CustomRatesDelete](/en/bridge/functions/mql5/customsymbols/customratesdelete) | Delete all bars from the price history of the custom symbol in the specified time interval | [Custom Symbols](/en/bridge/functions/mql5/customsymbols) |
| [CustomRatesReplace](/en/bridge/functions/mql5/customsymbols/customratesreplace) | Fully replace the price history of the custom symbol within the specified time interval with the data from the MqlRates type array | [Custom Symbols](/en/bridge/functions/mql5/customsymbols) |
| [CustomRatesUpdate](/en/bridge/functions/mql5/customsymbols/customratesupdate) | Add missing bars to the custom symbol history and replace existing data with the ones from the MqlRates type array | [Custom Symbols](/en/bridge/functions/mql5/customsymbols) |
| [CustomTicksAdd](/en/bridge/functions/mql5/customsymbols/customticksadd) | Adds data from an array of the MqlTick type to the price history of a custom symbol. The custom symbol must be selected in the Market Watch window | [Custom Symbols](/en/bridge/functions/mql5/customsymbols) |
| [CustomTicksDelete](/en/bridge/functions/mql5/customsymbols/customticksdelete) | Delete all ticks from the price history of the custom symbol in the specified time interval | [Custom Symbols](/en/bridge/functions/mql5/customsymbols) |
| [CustomTicksReplace](/en/bridge/functions/mql5/customsymbols/customticksreplace) | Fully replace the price history of the custom symbol within the specified time interval with the data from the MqlTick type array | [Custom Symbols](/en/bridge/functions/mql5/customsymbols) |
| [CustomBookAdd](/en/bridge/functions/mql5/customsymbols/custombookadd) | Passes the status of the Depth of Market for a custom symbol | [Custom Symbols](/en/bridge/functions/mql5/customsymbols) |
| [DatabaseOpen](/en/bridge/functions/mql5/database/databaseopen) | Opens or creates a database in a specified file | [Working with databases](/en/bridge/functions/mql5/database) |
| [DatabaseClose](/en/bridge/functions/mql5/database/databaseclose) | Closes a database | [Working with databases](/en/bridge/functions/mql5/database) |
| [DatabaseImport](/en/bridge/functions/mql5/database/databaseimport) | Imports data from a file into a table | [Working with databases](/en/bridge/functions/mql5/database) |
| [DatabaseExport](/en/bridge/functions/mql5/database/databaseexport) | Exports a table or an SQL request execution result to a CSV file | [Working with databases](/en/bridge/functions/mql5/database) |
| [DatabasePrint](/en/bridge/functions/mql5/database/databaseprint) | Prints a table or an SQL request execution result in the Experts journal | [Working with databases](/en/bridge/functions/mql5/database) |
| [DatabaseTableExists](/en/bridge/functions/mql5/database/databasetableexists) | Checks the presence of the table in a database | [Working with databases](/en/bridge/functions/mql5/database) |
| [DatabaseExecute](/en/bridge/functions/mql5/database/databaseexecute) | Executes a request to a specified database | [Working with databases](/en/bridge/functions/mql5/database) |
| [DatabasePrepare](/en/bridge/functions/mql5/database/databaseprepare) | Creates a handle of a request, which can then be executed using DatabaseRead() | [Working with databases](/en/bridge/functions/mql5/database) |
| [DatabaseReset](/en/bridge/functions/mql5/database/databasereset) | Resets a request, like after calling [DatabasePrepare()](/en/bridge/functions/mql5/database/databaseprepare) | [Working with databases](/en/bridge/functions/mql5/database) |
| [DatabaseBind](/en/bridge/functions/mql5/database/databasebind) | Sets a parameter value in a request | [Working with databases](/en/bridge/functions/mql5/database) |
| [DatabaseBindArray](/en/bridge/functions/mql5/database/databasebindarray) | Sets an array as a parameter value | [Working with databases](/en/bridge/functions/mql5/database) |
| [DatabaseRead](/en/bridge/functions/mql5/database/databaseread) | Moves to the next entry as a result of a request | [Working with databases](/en/bridge/functions/mql5/database) |
| [DatabaseReadBind](/en/bridge/functions/mql5/database/databasereadbind) | Moves to the next record and reads data into the structure from it | [Working with databases](/en/bridge/functions/mql5/database) |
| [DatabaseFinalize](/en/bridge/functions/mql5/database/databasefinalize) | Removes a request created in DatabasePrepare() | [Working with databases](/en/bridge/functions/mql5/database) |
| [DatabaseTransactionBegin](/en/bridge/functions/mql5/database/databasetransactionbegin) | Starts transaction execution | [Working with databases](/en/bridge/functions/mql5/database) |
| [DatabaseTransactionCommit](/en/bridge/functions/mql5/database/databasetransactioncommit) | Completes transaction execution | [Working with databases](/en/bridge/functions/mql5/database) |
| [DatabaseTransactionRollback](/en/bridge/functions/mql5/database/databasetransactionrollback) | Rolls back transactions | [Working with databases](/en/bridge/functions/mql5/database) |
| [DatabaseColumnsCount](/en/bridge/functions/mql5/database/databasecolumnscount) | Gets the number of fields in a request | [Working with databases](/en/bridge/functions/mql5/database) |
| [DatabaseColumnName](/en/bridge/functions/mql5/database/databasecolumnname) | Gets a field name by index | [Working with databases](/en/bridge/functions/mql5/database) |
| [DatabaseColumnType](/en/bridge/functions/mql5/database/databasecolumntype) | Gets a field type by index | [Working with databases](/en/bridge/functions/mql5/database) |
| [DatabaseColumnSize](/en/bridge/functions/mql5/database/databasecolumnsize) | Gets a field size in bytes | [Working with databases](/en/bridge/functions/mql5/database) |
| [DatabaseColumnText](/en/bridge/functions/mql5/database/databasecolumntext) | Gets a field value as a string from the current record | [Working with databases](/en/bridge/functions/mql5/database) |
| [DatabaseColumnInteger](/en/bridge/functions/mql5/database/databasecolumninteger) | Gets the int type value from the current record | [Working with databases](/en/bridge/functions/mql5/database) |
| [DatabaseColumnLong](/en/bridge/functions/mql5/database/databasecolumnlong) | Gets the long type value from the current record | [Working with databases](/en/bridge/functions/mql5/database) |
| [DatabaseColumnDouble](/en/bridge/functions/mql5/database/databasecolumndouble) | Gets the double type value from the current record | [Working with databases](/en/bridge/functions/mql5/database) |
| [DatabaseColumnBlob](/en/bridge/functions/mql5/database/databasecolumnblob) | Gets a field value as an array from the current record | [Working with databases](/en/bridge/functions/mql5/database) |
| [DebugBreak](/en/bridge/functions/mql5/common/debugbreak) | Program breakpoint in debugging | [Common Functions](/en/bridge/functions/mql5/common) |
| [Digits](/en/bridge/functions/mql5/check/digits) | Returns the number of decimal digits determining the accuracy of the price value of the current chart symbol | [Checkup](/en/bridge/functions/mql5/check) |
| [DoubleToString](/en/bridge/functions/mql5/convert/doubletostring) | Converting a numeric value to a text line with a specified accuracy | [Conversion Functions](/en/bridge/functions/mql5/convert) |
| [DXContextCreate](/en/bridge/functions/mql5/directx/dxcontextcreate) | Creates a graphic context for rendering frames of a specified size | [Working with DirectX](/en/bridge/functions/mql5/directx) |
| [DXContextSetSize](/en/bridge/functions/mql5/directx/dxcontextsetsize) | Changes a frame size of a graphic context created in DXContextCreate() | [Working with DirectX](/en/bridge/functions/mql5/directx) |
| [DXContextSetSize](/en/bridge/functions/mql5/directx/dxcontextsetsize) | Gets a frame size of a graphic context created in DXContextCreate() | [Working with DirectX](/en/bridge/functions/mql5/directx) |
| [DXContextClearColors](/en/bridge/functions/mql5/directx/dxcontextclearcolors) | Sets a specified color to all pixels for the rendering buffer | [Working with DirectX](/en/bridge/functions/mql5/directx) |
| [DXContextClearDepth](/en/bridge/functions/mql5/directx/dxcontextcleardepth) | Clears the depth buffer | [Working with DirectX](/en/bridge/functions/mql5/directx) |
| [DXContextGetColors](/en/bridge/functions/mql5/directx/dxcontextgetcolors) | Gets an image of a specified size and offset from a graphic context | [Working with DirectX](/en/bridge/functions/mql5/directx) |
| [DXContextGetDepth](/en/bridge/functions/mql5/directx/dxcontextgetdepth) | Gets the depth buffer of a rendered frame | [Working with DirectX](/en/bridge/functions/mql5/directx) |
| [DXBufferCreate](/en/bridge/functions/mql5/directx/dxbuffercreate) | Creates a buffer of a specified type based on a data array | [Working with DirectX](/en/bridge/functions/mql5/directx) |
| [DXTextureCreate](/en/bridge/functions/mql5/directx/dxtexturecreate) | Creates a 2D texture out of a rectangle of a specified size cut from a passed image | [Working with DirectX](/en/bridge/functions/mql5/directx) |
| [DXInputCreate](/en/bridge/functions/mql5/directx/dxinputcreate) | Creates shader inputs | [Working with DirectX](/en/bridge/functions/mql5/directx) |
| [DXInputSet](/en/bridge/functions/mql5/directx/dxinputset) | Sets shader inputs | [Working with DirectX](/en/bridge/functions/mql5/directx) |
| [DXShaderCreate](/en/bridge/functions/mql5/directx/dxshadercreate) | Creates a shader of a specified type | [Working with DirectX](/en/bridge/functions/mql5/directx) |
| [DXShaderSetLayout](/en/bridge/functions/mql5/directx/dxshadersetlayout) | Sets vertex layout for the vertex shader | [Working with DirectX](/en/bridge/functions/mql5/directx) |
| [DXShaderInputsSet](/en/bridge/functions/mql5/directx/dxshaderinputsset) | Sets shader inputs | [Working with DirectX](/en/bridge/functions/mql5/directx) |
| [DXShaderTexturesSet](/en/bridge/functions/mql5/directx/dxshadertexturesset) | Sets shader textures | [Working with DirectX](/en/bridge/functions/mql5/directx) |
| [DXDraw](/en/bridge/functions/mql5/directx/dxdraw) | Renders the vertices of the vertex buffer set in DXBufferSet() | [Working with DirectX](/en/bridge/functions/mql5/directx) |
| [DXDrawIndexed](/en/bridge/functions/mql5/directx/dxdrawindexed) | Renders graphic primitives described by the index buffer from DXBufferSet() | [Working with DirectX](/en/bridge/functions/mql5/directx) |
| [DXPrimiveTopologySet](/en/bridge/functions/mql5/directx/dxprimivetopologyset) | Sets the type of primitives for rendering using DXDrawIndexed() | [Working with DirectX](/en/bridge/functions/mql5/directx) |
| [DXBufferSet](/en/bridge/functions/mql5/directx/dxbufferset) | Sets a buffer for the current rendering | [Working with DirectX](/en/bridge/functions/mql5/directx) |
| [DXShaderSet](/en/bridge/functions/mql5/directx/dxshaderset) | Sets a shader for rendering | [Working with DirectX](/en/bridge/functions/mql5/directx) |
| [DXHandleType](/en/bridge/functions/mql5/directx/dxhandletype) | Returns a handle type | [Working with DirectX](/en/bridge/functions/mql5/directx) |
| [DXRelease](/en/bridge/functions/mql5/directx/dxrelease) | Releases a handle | [Working with DirectX](/en/bridge/functions/mql5/directx) |
| [EnumToString](/en/bridge/functions/mql5/convert/enumtostring) | Converting an enumeration value of any type to string | [Conversion Functions](/en/bridge/functions/mql5/convert) |
| [EventChartCustom](/en/bridge/functions/mql5/eventfunctions/eventchartcustom) | Generates a custom event for the specified chart | [Working with Events](/en/bridge/functions/mql5/eventfunctions) |
| [EventKillTimer](/en/bridge/functions/mql5/eventfunctions/eventkilltimer) | Stops the generation of events by the timer in the current chart | [Working with Events](/en/bridge/functions/mql5/eventfunctions) |
| [EventSetMillisecondTimer](/en/bridge/functions/mql5/eventfunctions/eventsetmillisecondtimer) | Launches event generator of the high-resolution timer with a period less than 1 second for the current chart | [Working with Events](/en/bridge/functions/mql5/eventfunctions) |
| [EventSetTimer](/en/bridge/functions/mql5/eventfunctions/eventsettimer) | Starts the timer event generator with the specified periodicity for the current chart | [Working with Events](/en/bridge/functions/mql5/eventfunctions) |
| [exp](/en/bridge/functions/mql5/math/mathexp) | Returns exponent of a number | [Math Functions](/en/bridge/functions/mql5/math) |
| [ExpertRemove](/en/bridge/functions/mql5/common/expertremove) | Stops Expert Advisor and unloads it from the chart | [Common Functions](/en/bridge/functions/mql5/common) |
| [fabs](/en/bridge/functions/mql5/math/mathabs) | Returns absolute value (modulus) of the specified numeric value | [Math Functions](/en/bridge/functions/mql5/math) |
| [FileClose](/en/bridge/functions/mql5/files/fileclose) | Closes a previously opened file | [File Functions](/en/bridge/functions/mql5/files) |
| [FileCopy](/en/bridge/functions/mql5/files/filecopy) | Copies the original file from a local or shared folder to another file | [File Functions](/en/bridge/functions/mql5/files) |
| [FileDelete](/en/bridge/functions/mql5/files/filedelete) | Deletes a specified file | [File Functions](/en/bridge/functions/mql5/files) |
| [FileFindClose](/en/bridge/functions/mql5/files/filefindclose) | Closes search handle | [File Functions](/en/bridge/functions/mql5/files) |
| [FileFindFirst](/en/bridge/functions/mql5/files/filefindfirst) | Starts the search of files in a directory in accordance with the specified filter | [File Functions](/en/bridge/functions/mql5/files) |
| [FileFindNext](/en/bridge/functions/mql5/files/filefindnext) | Continues the search started by the FileFindFirst() function | [File Functions](/en/bridge/functions/mql5/files) |
| [FileFlush](/en/bridge/functions/mql5/files/fileflush) | Writes to a disk all data remaining in the input/output file buffer | [File Functions](/en/bridge/functions/mql5/files) |
| [FileGetInteger](/en/bridge/functions/mql5/files/filegetinteger) | Gets an integer property of a file | [File Functions](/en/bridge/functions/mql5/files) |
| [FileIsEnding](/en/bridge/functions/mql5/files/fileisending) | Defines the end of a file in the process of reading | [File Functions](/en/bridge/functions/mql5/files) |
| [FileIsExist](/en/bridge/functions/mql5/files/fileisexist) | Checks the existence of a file | [File Functions](/en/bridge/functions/mql5/files) |
| [FileIsLineEnding](/en/bridge/functions/mql5/files/fileislineending) | Defines the end of a line in a text file in the process of reading | [File Functions](/en/bridge/functions/mql5/files) |
| [FileMove](/en/bridge/functions/mql5/files/filemove) | Moves or renames a file | [File Functions](/en/bridge/functions/mql5/files) |
| [FileOpen](/en/bridge/functions/mql5/files/fileopen) | Opens a file with a specified name and flag | [File Functions](/en/bridge/functions/mql5/files) |
| [FileReadArray](/en/bridge/functions/mql5/files/filereadarray) | Reads arrays of any type except for string from the file of the BIN type | [File Functions](/en/bridge/functions/mql5/files) |
| [FileReadBool](/en/bridge/functions/mql5/files/filereadbool) | Reads from the file of the CSV type a string from the current position till a delimiter (or till the end of a text line) and converts the read string to a value of bool type | [File Functions](/en/bridge/functions/mql5/files) |
| [FileReadDatetime](/en/bridge/functions/mql5/files/filereaddatetime) | Reads from the file of the CSV type a string of one of the formats: "YYYY.MM.DD HH:MM:SS", "YYYY.MM.DD" or "HH:MM:SS" - and converts it into a datetime value | [File Functions](/en/bridge/functions/mql5/files) |
| [FileReadDouble](/en/bridge/functions/mql5/files/filereaddouble) | Reads a double value from the current position of the file pointer | [File Functions](/en/bridge/functions/mql5/files) |
| [FileReadFloat](/en/bridge/functions/mql5/files/filereadfloat) | Reads a float value from the current position of the file pointer | [File Functions](/en/bridge/functions/mql5/files) |
| [FileReadInteger](/en/bridge/functions/mql5/files/filereadinteger) | Reads int, short or char value from the current position of the file pointer | [File Functions](/en/bridge/functions/mql5/files) |
| [FileReadLong](/en/bridge/functions/mql5/files/filereadlong) | Reads a long type value from the current position of the file pointer | [File Functions](/en/bridge/functions/mql5/files) |
| [FileReadNumber](/en/bridge/functions/mql5/files/filereadnumber) | Reads from the file of the CSV type a string from the current position till a delimiter (or til the end of a text line) and converts the read string into double value | [File Functions](/en/bridge/functions/mql5/files) |
| [FileReadString](/en/bridge/functions/mql5/files/filereadstring) | Reads a string from the current position of a file pointer from a file | [File Functions](/en/bridge/functions/mql5/files) |
| [FileReadStruct](/en/bridge/functions/mql5/files/filereadstruct) | Reads the contents from a binary file  into a structure passed as a parameter, from the current position of the file pointer | [File Functions](/en/bridge/functions/mql5/files) |
| [FileSeek](/en/bridge/functions/mql5/files/fileseek) | Moves the position of the file pointer by a specified number of bytes relative to the specified position | [File Functions](/en/bridge/functions/mql5/files) |
| [FileSize](/en/bridge/functions/mql5/files/filesize) | Returns the size of a corresponding open file | [File Functions](/en/bridge/functions/mql5/files) |
| [FileTell](/en/bridge/functions/mql5/files/filetell) | Returns the current position of the file pointer of a corresponding open file | [File Functions](/en/bridge/functions/mql5/files) |
| [FileWrite](/en/bridge/functions/mql5/files/filewrite) | Writes data to a file of CSV or TXT type | [File Functions](/en/bridge/functions/mql5/files) |
| [FileWriteArray](/en/bridge/functions/mql5/files/filewritearray) | Writes arrays of any type except for string into a file of BIN type | [File Functions](/en/bridge/functions/mql5/files) |
| [FileWriteDouble](/en/bridge/functions/mql5/files/filewritedouble) | Writes value of the double type from the current position of a file pointer into a binary file | [File Functions](/en/bridge/functions/mql5/files) |
| [FileWriteFloat](/en/bridge/functions/mql5/files/filewritefloat) | Writes value of the float type from the current position of a file pointer into a binary file | [File Functions](/en/bridge/functions/mql5/files) |
| [FileWriteInteger](/en/bridge/functions/mql5/files/filewriteinteger) | Writes value of the int type from the current position of a file pointer into a binary file | [File Functions](/en/bridge/functions/mql5/files) |
| [FileWriteLong](/en/bridge/functions/mql5/files/filewritelong) | Writes value of the long type from the current position of a file pointer into a binary file | [File Functions](/en/bridge/functions/mql5/files) |
| [FileWriteString](/en/bridge/functions/mql5/files/filewritestring) | Writes the value of a string parameter into a BIN or TXT file starting from the current position of the file pointer | [File Functions](/en/bridge/functions/mql5/files) |
| [FileWriteStruct](/en/bridge/functions/mql5/files/filewritestruct) | Writes the contents of a structure passed as a parameter into a binary file, starting from the current position of the file pointer | [File Functions](/en/bridge/functions/mql5/files) |
| [floor](/en/bridge/functions/mql5/math/mathfloor) | Returns integer numeric value closest from below | [Math Functions](/en/bridge/functions/mql5/math) |
| [fmax](/en/bridge/functions/mql5/math/mathmax) | Returns the maximal value of the two numeric values | [Math Functions](/en/bridge/functions/mql5/math) |
| [fmin](/en/bridge/functions/mql5/math/mathmin) | Returns the minimal value of the two numeric values | [Math Functions](/en/bridge/functions/mql5/math) |
| [fmod](/en/bridge/functions/mql5/math/mathmod) | Returns the real remainder after the division of two numbers | [Math Functions](/en/bridge/functions/mql5/math) |
| [FolderClean](/en/bridge/functions/mql5/files/folderclean) | Deletes all files in the specified folder | [File Functions](/en/bridge/functions/mql5/files) |
| [FolderCreate](/en/bridge/functions/mql5/files/foldercreate) | Creates a folder in the Files directory | [File Functions](/en/bridge/functions/mql5/files) |
| [FolderDelete](/en/bridge/functions/mql5/files/folderdelete) | Removes a selected directory. If the folder is not empty, then it can't be removed | [File Functions](/en/bridge/functions/mql5/files) |
| [FrameAdd](/en/bridge/functions/mql5/optimization_frames/frameadd) | Adds a frame with data | [Working with Optimization Results](/en/bridge/functions/mql5/optimization_frames) |
| [FrameFilter](/en/bridge/functions/mql5/optimization_frames/framefilter) | Sets the frame reading filter and moves the pointer to the beginning | [Working with Optimization Results](/en/bridge/functions/mql5/optimization_frames) |
| [FrameFirst](/en/bridge/functions/mql5/optimization_frames/framefirst) | Moves a pointer of frame reading to the beginning and resets the previously set filter | [Working with Optimization Results](/en/bridge/functions/mql5/optimization_frames) |
| [FrameInputs](/en/bridge/functions/mql5/optimization_frames/frameinputs) | Receives [input parameters](/en/bridge/functions/mql5/basis/variables/inputvariables), on which the frame is formed | [Working with Optimization Results](/en/bridge/functions/mql5/optimization_frames) |
| [FrameNext](/en/bridge/functions/mql5/optimization_frames/framenext) | Reads a frame and moves the pointer to the next one | [Working with Optimization Results](/en/bridge/functions/mql5/optimization_frames) |
| [GetLastError](/en/bridge/functions/mql5/check/getlasterror) | Returns the last error | [Checkup](/en/bridge/functions/mql5/check) |
| [GetPointer](/en/bridge/functions/mql5/common/getpointer) | Returns the object [pointer](/en/bridge/functions/mql5/basis/types/object_pointers) | [Common Functions](/en/bridge/functions/mql5/common) |
| [GetTickCount](/en/bridge/functions/mql5/common/gettickcount) | Returns the number of milliseconds that have elapsed since the system was started | [Common Functions](/en/bridge/functions/mql5/common) |
| [GlobalVariableCheck](/en/bridge/functions/mql5/globals/globalvariablecheck) | Checks the existence of a global variable with the specified name | [Global Variables of the Terminal](/en/bridge/functions/mql5/globals) |
| [GlobalVariableDel](/en/bridge/functions/mql5/globals/globalvariabledel) | Deletes a global variable | [Global Variables of the Terminal](/en/bridge/functions/mql5/globals) |
| [GlobalVariableGet](/en/bridge/functions/mql5/globals/globalvariableget) | Returns the value of a global variable | [Global Variables of the Terminal](/en/bridge/functions/mql5/globals) |
| [GlobalVariableName](/en/bridge/functions/mql5/globals/globalvariablename) | Returns the name of a global variable by its ordinal number in the list of global variables | [Global Variables of the Terminal](/en/bridge/functions/mql5/globals) |
| [GlobalVariablesDeleteAll](/en/bridge/functions/mql5/globals/globalvariablesdeleteall) | Deletes global variables with the specified prefix in their names | [Global Variables of the Terminal](/en/bridge/functions/mql5/globals) |
| [GlobalVariableSet](/en/bridge/functions/mql5/globals/globalvariableset) | Sets the new value to a global variable | [Global Variables of the Terminal](/en/bridge/functions/mql5/globals) |
| [GlobalVariableSetOnCondition](/en/bridge/functions/mql5/globals/globalvariablesetoncondition) | Sets the new value of the existing global variable by condition | [Global Variables of the Terminal](/en/bridge/functions/mql5/globals) |
| [GlobalVariablesFlush](/en/bridge/functions/mql5/globals/globalvariablesflush) | Forcibly saves contents of all global variables to a disk | [Global Variables of the Terminal](/en/bridge/functions/mql5/globals) |
| [GlobalVariablesTotal](/en/bridge/functions/mql5/globals/globalvariablestotal) | Returns the total number of global variables | [Global Variables of the Terminal](/en/bridge/functions/mql5/globals) |
| [GlobalVariableTemp](/en/bridge/functions/mql5/globals/globalvariabletemp) | Sets the new value to a global variable, that exists only in the current session of the terminal | [Global Variables of the Terminal](/en/bridge/functions/mql5/globals) |
| [GlobalVariableTime](/en/bridge/functions/mql5/globals/globalvariabletime) | Returns time of the last accessing the global variable | [Global Variables of the Terminal](/en/bridge/functions/mql5/globals) |
| [HistoryDealGetDouble](/en/bridge/functions/mql5/trading/historydealgetdouble) | Returns the requested property of a deal in the history (double) | [Trade Functions](/en/bridge/functions/mql5/trading) |
| [HistoryDealGetInteger](/en/bridge/functions/mql5/trading/historydealgetinteger) | Returns the requested property of a deal in the history (datetime or int) | [Trade Functions](/en/bridge/functions/mql5/trading) |
| [HistoryDealGetString](/en/bridge/functions/mql5/trading/historydealgetstring) | Returns the requested property of a deal in the history (string) | [Trade Functions](/en/bridge/functions/mql5/trading) |
| [HistoryDealGetTicket](/en/bridge/functions/mql5/trading/historydealgetticket) | Returns a ticket of a corresponding deal in the history | [Trade Functions](/en/bridge/functions/mql5/trading) |
| [HistoryDealSelect](/en/bridge/functions/mql5/trading/historydealselect) | Selects a deal in the history for further calling it through appropriate functions | [Trade Functions](/en/bridge/functions/mql5/trading) |
| [HistoryDealsTotal](/en/bridge/functions/mql5/trading/historydealstotal) | Returns the number of deals in the history | [Trade Functions](/en/bridge/functions/mql5/trading) |
| [HistoryOrderGetDouble](/en/bridge/functions/mql5/trading/historyordergetdouble) | Returns the requested property of an order in the history (double) | [Trade Functions](/en/bridge/functions/mql5/trading) |
| [HistoryOrderGetInteger](/en/bridge/functions/mql5/trading/historyordergetinteger) | Returns the requested property of an order in the history (datetime or int) | [Trade Functions](/en/bridge/functions/mql5/trading) |
| [HistoryOrderGetString](/en/bridge/functions/mql5/trading/historyordergetstring) | Returns the requested property of an order in the history (string) | [Trade Functions](/en/bridge/functions/mql5/trading) |
| [HistoryOrderGetTicket](/en/bridge/functions/mql5/trading/historyordergetticket) | Return order ticket of a corresponding order in the history | [Trade Functions](/en/bridge/functions/mql5/trading) |
| [HistoryOrderSelect](/en/bridge/functions/mql5/trading/historyorderselect) | Selects an order in the history for further working with it | [Trade Functions](/en/bridge/functions/mql5/trading) |
| [HistoryOrdersTotal](/en/bridge/functions/mql5/trading/historyorderstotal) | Returns the number of orders in the history | [Trade Functions](/en/bridge/functions/mql5/trading) |
| [HistorySelect](/en/bridge/functions/mql5/trading/historyselect) | Retrieves the history of transactions and orders for the specified period of the server time | [Trade Functions](/en/bridge/functions/mql5/trading) |
| [HistorySelectByPosition](/en/bridge/functions/mql5/trading/historyselectbyposition) | Requests the history of deals with a specified [position identifier](/en/bridge/functions/mql5/constants/tradingconstants/positionproperties#enum_position_property_integer). | [Trade Functions](/en/bridge/functions/mql5/trading) |
| [iBars](/en/bridge/functions/mql5/series/ibars) | Returns the number of bars of a corresponding symbol and period, available in history | [Timeseries and Indicators Access](/en/bridge/functions/mql5/series) |
| [iBarShift](/en/bridge/functions/mql5/series/ibarshift) | Returns the index of the bar corresponding to the specified time | [Timeseries and Indicators Access](/en/bridge/functions/mql5/series) |
| [iClose](/en/bridge/functions/mql5/series/iclose) | Returns the Close price of the bar (indicated by the 'shift' parameter) on the corresponding chart | [Timeseries and Indicators Access](/en/bridge/functions/mql5/series) |
| [iHigh](/en/bridge/functions/mql5/series/ihigh) | Returns the High price of the bar (indicated by the 'shift' parameter) on the corresponding chart | [Timeseries and Indicators Access](/en/bridge/functions/mql5/series) |
| [iHighest](/en/bridge/functions/mql5/series/ihighest) | Returns the index of the highest value found on the corresponding chart (shift relative to the current bar) | [Timeseries and Indicators Access](/en/bridge/functions/mql5/series) |
| [iLow](/en/bridge/functions/mql5/series/ilow) | Returns the Low price of the bar (indicated by the 'shift' parameter) on the corresponding chart | [Timeseries and Indicators Access](/en/bridge/functions/mql5/series) |
| [iLowest](/en/bridge/functions/mql5/series/ilowest) | Returns the index of the smallest value found on the corresponding chart (shift relative to the current bar) | [Timeseries and Indicators Access](/en/bridge/functions/mql5/series) |
| [iOpen](/en/bridge/functions/mql5/series/iopen) | Returns the Open price of the bar (indicated by the 'shift' parameter) on the corresponding chart | [Timeseries and Indicators Access](/en/bridge/functions/mql5/series) |
| [iTime](/en/bridge/functions/mql5/series/itime) | Returns the opening time of the bar (indicated by the 'shift' parameter) on the corresponding chart | [Timeseries and Indicators Access](/en/bridge/functions/mql5/series) |
| [iTickVolume](/en/bridge/functions/mql5/series/itickvolume) | Returns the tick volume of the bar (indicated by the 'shift' parameter) on the corresponding chart | [Timeseries and Indicators Access](/en/bridge/functions/mql5/series) |
| [iRealVolume](/en/bridge/functions/mql5/series/irealvolume) | Returns the real volume of the bar (indicated by the 'shift' parameter) on the corresponding chart | [Timeseries and Indicators Access](/en/bridge/functions/mql5/series) |
| [iVolume](/en/bridge/functions/mql5/series/ivolume) | Returns the tick volume of the bar (indicated by the 'shift' parameter) on the corresponding chart | [Timeseries and Indicators Access](/en/bridge/functions/mql5/series) |
| [iSpread](/en/bridge/functions/mql5/series/ispread) | Returns the spread value of the bar (indicated by the 'shift' parameter) on the corresponding chart | [Timeseries and Indicators Access](/en/bridge/functions/mql5/series) |
| [iAD](/en/bridge/functions/mql5/indicators/iad) | Accumulation/Distribution | [Technical Indicators](/en/bridge/functions/mql5/indicators) |
| [iADX](/en/bridge/functions/mql5/indicators/iadx) | Average Directional Index | [Technical Indicators](/en/bridge/functions/mql5/indicators) |
| [iADXWilder](/en/bridge/functions/mql5/indicators/iadxwilder) | Average Directional Index by Welles Wilder | [Technical Indicators](/en/bridge/functions/mql5/indicators) |
| [iAlligator](/en/bridge/functions/mql5/indicators/ialligator) | Alligator | [Technical Indicators](/en/bridge/functions/mql5/indicators) |
| [iAMA](/en/bridge/functions/mql5/indicators/iama) | Adaptive Moving Average | [Technical Indicators](/en/bridge/functions/mql5/indicators) |
| [iAO](/en/bridge/functions/mql5/indicators/iao) | Awesome Oscillator | [Technical Indicators](/en/bridge/functions/mql5/indicators) |
| [iATR](/en/bridge/functions/mql5/indicators/iatr) | Average True Range | [Technical Indicators](/en/bridge/functions/mql5/indicators) |
| [iBands](/en/bridge/functions/mql5/indicators/ibands) | Bollinger Bands® | [Technical Indicators](/en/bridge/functions/mql5/indicators) |
| [iBearsPower](/en/bridge/functions/mql5/indicators/ibearspower) | Bears Power | [Technical Indicators](/en/bridge/functions/mql5/indicators) |
| [iBullsPower](/en/bridge/functions/mql5/indicators/ibullspower) | Bulls Power | [Technical Indicators](/en/bridge/functions/mql5/indicators) |
| [iBWMFI](/en/bridge/functions/mql5/indicators/ibwmfi) | Market Facilitation Index by Bill Williams | [Technical Indicators](/en/bridge/functions/mql5/indicators) |
| [iCCI](/en/bridge/functions/mql5/indicators/icci) | Commodity Channel Index | [Technical Indicators](/en/bridge/functions/mql5/indicators) |
| [iChaikin](/en/bridge/functions/mql5/indicators/ichaikin) | Chaikin Oscillator | [Technical Indicators](/en/bridge/functions/mql5/indicators) |
| [iCustom](/en/bridge/functions/mql5/indicators/icustom) | Custom indicator | [Technical Indicators](/en/bridge/functions/mql5/indicators) |
| [iDEMA](/en/bridge/functions/mql5/indicators/idema) | Double Exponential Moving Average | [Technical Indicators](/en/bridge/functions/mql5/indicators) |
| [iDeMarker](/en/bridge/functions/mql5/indicators/idemarker) | DeMarker | [Technical Indicators](/en/bridge/functions/mql5/indicators) |
| [iEnvelopes](/en/bridge/functions/mql5/indicators/ienvelopes) | Envelopes | [Technical Indicators](/en/bridge/functions/mql5/indicators) |
| [iForce](/en/bridge/functions/mql5/indicators/iforce) | Force Index | [Technical Indicators](/en/bridge/functions/mql5/indicators) |
| [iFractals](/en/bridge/functions/mql5/indicators/ifractals) | Fractals | [Technical Indicators](/en/bridge/functions/mql5/indicators) |
| [iFrAMA](/en/bridge/functions/mql5/indicators/iframa) | Fractal Adaptive Moving Average | [Technical Indicators](/en/bridge/functions/mql5/indicators) |
| [iGator](/en/bridge/functions/mql5/indicators/igator) | Gator Oscillator | [Technical Indicators](/en/bridge/functions/mql5/indicators) |
| [iIchimoku](/en/bridge/functions/mql5/indicators/iichimoku) | Ichimoku Kinko Hyo | [Technical Indicators](/en/bridge/functions/mql5/indicators) |
| [iMA](/en/bridge/functions/mql5/indicators/ima) | Moving Average | [Technical Indicators](/en/bridge/functions/mql5/indicators) |
| [iMACD](/en/bridge/functions/mql5/indicators/imacd) | Moving Averages Convergence-Divergence | [Technical Indicators](/en/bridge/functions/mql5/indicators) |
| [iMFI](/en/bridge/functions/mql5/indicators/imfi) | Money Flow Index | [Technical Indicators](/en/bridge/functions/mql5/indicators) |
| [iMomentum](/en/bridge/functions/mql5/indicators/imomentum) | Momentum | [Technical Indicators](/en/bridge/functions/mql5/indicators) |
| [IndicatorCreate](/en/bridge/functions/mql5/series/indicatorcreate) | Returns the handle to the specified technical indicator created by an array of [MqlParam](/en/bridge/functions/mql5/constants/structures/mqlparam) type parameters | [Timeseries and Indicators Access](/en/bridge/functions/mql5/series) |
| [IndicatorParameters](/en/bridge/functions/mql5/series/indicatorparameters) | Based on the specified handle, returns the number of input parameters of the indicator, as well as the values and types of the parameters | [Timeseries and Indicators Access](/en/bridge/functions/mql5/series) |
| [IndicatorRelease](/en/bridge/functions/mql5/series/indicatorrelease) | Removes an indicator handle and releases the calculation block of the indicator, if it's not used by anyone else | [Timeseries and Indicators Access](/en/bridge/functions/mql5/series) |
| [IndicatorSetDouble](/en/bridge/functions/mql5/customind/indicatorsetdouble) | Sets the value of an indicator property of the [double](/en/bridge/functions/mql5/basis/types/double) type | [Custom Indicators](/en/bridge/functions/mql5/customind) |
| [IndicatorSetInteger](/en/bridge/functions/mql5/customind/indicatorsetinteger) | Sets the value of an indicator property of the [int](/en/bridge/functions/mql5/basis/types/integer/integertypes) type | [Custom Indicators](/en/bridge/functions/mql5/customind) |
| [IndicatorSetString](/en/bridge/functions/mql5/customind/indicatorsetstring) | Sets the value of an indicator property of the [string](/en/bridge/functions/mql5/basis/types/stringconst) type | [Custom Indicators](/en/bridge/functions/mql5/customind) |
| [IntegerToString](/en/bridge/functions/mql5/convert/integertostring) | Converting int into a string of preset length | [Conversion Functions](/en/bridge/functions/mql5/convert) |
| [iOBV](/en/bridge/functions/mql5/indicators/iobv) | On Balance Volume | [Technical Indicators](/en/bridge/functions/mql5/indicators) |
| [iOsMA](/en/bridge/functions/mql5/indicators/iosma) | Moving Average of Oscillator (MACD histogram) | [Technical Indicators](/en/bridge/functions/mql5/indicators) |
| [iRSI](/en/bridge/functions/mql5/indicators/irsi) | Relative Strength Index | [Technical Indicators](/en/bridge/functions/mql5/indicators) |
| [iRVI](/en/bridge/functions/mql5/indicators/irvi) | Relative Vigor Index | [Technical Indicators](/en/bridge/functions/mql5/indicators) |
| [iSAR](/en/bridge/functions/mql5/indicators/isar) | Parabolic Stop And Reverse System | [Technical Indicators](/en/bridge/functions/mql5/indicators) |
| [IsStopped](/en/bridge/functions/mql5/check/isstopped) | Returns true, if an mql5 program has been commanded to stop its operation | [Checkup](/en/bridge/functions/mql5/check) |
| [iStdDev](/en/bridge/functions/mql5/indicators/istddev) | Standard Deviation | [Technical Indicators](/en/bridge/functions/mql5/indicators) |
| [iStochastic](/en/bridge/functions/mql5/indicators/istochastic) | Stochastic Oscillator | [Technical Indicators](/en/bridge/functions/mql5/indicators) |
| [iTEMA](/en/bridge/functions/mql5/indicators/itema) | Triple Exponential Moving Average | [Technical Indicators](/en/bridge/functions/mql5/indicators) |
| [iTriX](/en/bridge/functions/mql5/indicators/itrix) | Triple Exponential Moving Averages Oscillator | [Technical Indicators](/en/bridge/functions/mql5/indicators) |
| [iVIDyA](/en/bridge/functions/mql5/indicators/ividya) | Variable Index Dynamic Average | [Technical Indicators](/en/bridge/functions/mql5/indicators) |
| [iVolumes](/en/bridge/functions/mql5/indicators/ivolumes) | Volumes | [Technical Indicators](/en/bridge/functions/mql5/indicators) |
| [iWPR](/en/bridge/functions/mql5/indicators/iwpr) | Williams' Percent Range | [Technical Indicators](/en/bridge/functions/mql5/indicators) |
| [log](/en/bridge/functions/mql5/math/mathlog) | Returns natural logarithm | [Math Functions](/en/bridge/functions/mql5/math) |
| [log10](/en/bridge/functions/mql5/math/mathlog10) | Returns the logarithm of a number by base 10 | [Math Functions](/en/bridge/functions/mql5/math) |
| [MarketBookAdd](/en/bridge/functions/mql5/marketinformation/marketbookadd) | Provides opening of Depth of Market for a selected symbol, and subscribes for receiving notifications of the DOM changes | [Market Info](/en/bridge/functions/mql5/marketinformation) |
| [MarketBookGet](/en/bridge/functions/mql5/marketinformation/marketbookget) | Returns a structure array [MqlBookInfo](/en/bridge/functions/mql5/constants/structures/mqlbookinfo) containing records of the Depth of Market of a specified symbol | [Market Info](/en/bridge/functions/mql5/marketinformation) |
| [MarketBookRelease](/en/bridge/functions/mql5/marketinformation/marketbookrelease) | Provides closing of Depth of Market for a selected symbol, and cancels the subscription for receiving notifications of the DOM changes | [Market Info](/en/bridge/functions/mql5/marketinformation) |
| [MathAbs](/en/bridge/functions/mql5/math/mathabs) | Returns absolute value (modulus) of the specified numeric value | [Math Functions](/en/bridge/functions/mql5/math) |
| [MathArccos](/en/bridge/functions/mql5/math/matharccos) | Returns the arc cosine of x in radians | [Math Functions](/en/bridge/functions/mql5/math) |
| [MathArcsin](/en/bridge/functions/mql5/math/matharcsin) | Returns the arc sine of x in radians | [Math Functions](/en/bridge/functions/mql5/math) |
| [MathArctan](/en/bridge/functions/mql5/math/matharctan) | Returns the arc tangent of x in radians | [Math Functions](/en/bridge/functions/mql5/math) |
| [MathCeil](/en/bridge/functions/mql5/math/mathceil) | Returns integer numeric value closest from above | [Math Functions](/en/bridge/functions/mql5/math) |
| [MathCos](/en/bridge/functions/mql5/math/mathcos) | Returns the cosine of a number | [Math Functions](/en/bridge/functions/mql5/math) |
| [MathExp](/en/bridge/functions/mql5/math/mathexp) | Returns exponent of a number | [Math Functions](/en/bridge/functions/mql5/math) |
| [MathFloor](/en/bridge/functions/mql5/math/mathfloor) | Returns integer numeric value closest from below | [Math Functions](/en/bridge/functions/mql5/math) |
| [MathIsValidNumber](/en/bridge/functions/mql5/math/mathisvalidnumber) | Checks the correctness of a real number | [Math Functions](/en/bridge/functions/mql5/math) |
| [MathLog](/en/bridge/functions/mql5/math/mathlog) | Returns natural logarithm | [Math Functions](/en/bridge/functions/mql5/math) |
| [MathLog10](/en/bridge/functions/mql5/math/mathlog10) | Returns the logarithm of a number by base 10 | [Math Functions](/en/bridge/functions/mql5/math) |
| [MathMax](/en/bridge/functions/mql5/math/mathmax) | Returns the maximal value of the two numeric values | [Math Functions](/en/bridge/functions/mql5/math) |
| [MathMin](/en/bridge/functions/mql5/math/mathmin) | Returns the minimal value of the two numeric values | [Math Functions](/en/bridge/functions/mql5/math) |
| [MathMod](/en/bridge/functions/mql5/math/mathmod) | Returns the real remainder after the division of two numbers | [Math Functions](/en/bridge/functions/mql5/math) |
| [MathPow](/en/bridge/functions/mql5/math/mathpow) | Raises the base to the specified power | [Math Functions](/en/bridge/functions/mql5/math) |
| [MathRand](/en/bridge/functions/mql5/math/mathrand) | Returns a pseudorandom value within the range of 0 to 32767 | [Math Functions](/en/bridge/functions/mql5/math) |
| [MathRound](/en/bridge/functions/mql5/math/mathround) | Rounds of a value to the nearest integer | [Math Functions](/en/bridge/functions/mql5/math) |
| [MathSin](/en/bridge/functions/mql5/math/mathsin) | Returns the sine of a number | [Math Functions](/en/bridge/functions/mql5/math) |
| [MathSqrt](/en/bridge/functions/mql5/math/mathsqrt) | Returns a square root | [Math Functions](/en/bridge/functions/mql5/math) |
| [MathSrand](/en/bridge/functions/mql5/math/mathsrand) | Sets the starting point for generating a series of pseudorandom integers | [Math Functions](/en/bridge/functions/mql5/math) |
| [MathTan](/en/bridge/functions/mql5/math/mathtan) | Returns the tangent of a number | [Math Functions](/en/bridge/functions/mql5/math) |
| [MessageBox](/en/bridge/functions/mql5/common/messagebox) | Creates, displays a message box and manages it | [Common Functions](/en/bridge/functions/mql5/common) |
| [MQLInfoInteger](/en/bridge/functions/mql5/check/mqlinfointeger) | Returns an integer value of a corresponding property of a running mql5 program | [Checkup](/en/bridge/functions/mql5/check) |
| [MQLInfoString](/en/bridge/functions/mql5/check/mqlinfostring) | Returns a string value of a corresponding property of a running mql5 program | [Checkup](/en/bridge/functions/mql5/check) |
| [MT5Initialize](/en/bridge/functions/mql5/python_metatrader5/mt5initialize_py) | Establish a connection with the MetaTrader 5 terminal | [MetaTrader for Python](/en/bridge/functions/mql5/python_metatrader5) |
| [MT5Shutdown](/en/bridge/functions/mql5/python_metatrader5/mt5shutdown_py) | Close the previously established connection to the MetaTrader 5 terminal | [MetaTrader for Python](/en/bridge/functions/mql5/python_metatrader5) |
| [MT5TerminalInfo](/en/bridge/functions/mql5/python_metatrader5/mt5terminalinfo_py) | Get status and parameters of the connected MetaTrader 5 terminal | [MetaTrader for Python](/en/bridge/functions/mql5/python_metatrader5) |
| [MT5Version](/en/bridge/functions/mql5/python_metatrader5/mt5version_py) | Return the MetaTrader 5 terminal version | [MetaTrader for Python](/en/bridge/functions/mql5/python_metatrader5) |
| [MT5CopyRatesFrom](/en/bridge/functions/mql5/python_metatrader5/mt5copyratesfrom_py) | Get bars from the MetaTrader 5 terminal starting from the specified date | [MetaTrader for Python](/en/bridge/functions/mql5/python_metatrader5) |
| [MT5CopyRatesFromPos](/en/bridge/functions/mql5/python_metatrader5/mt5copyratesfrompos_py) | Get bars from the MetaTrader 5 terminal starting from the specified index | [MetaTrader for Python](/en/bridge/functions/mql5/python_metatrader5) |
| [MT5CopyRatesRange](/en/bridge/functions/mql5/python_metatrader5/mt5copyratesrange_py) | Get bars in the specified date range from the MetaTrader 5 terminal | [MetaTrader for Python](/en/bridge/functions/mql5/python_metatrader5) |
| [MT5CopyTicksFrom](/en/bridge/functions/mql5/python_metatrader5/mt5copyticksfrom_py) | Get ticks from the MetaTrader 5 terminal starting from the specified date | [MetaTrader for Python](/en/bridge/functions/mql5/python_metatrader5) |
| [MT5CopyTicksRange](/en/bridge/functions/mql5/python_metatrader5/mt5copyticksrange_py) | Get ticks for the specified date range from the MetaTrader 5 terminal | [MetaTrader for Python](/en/bridge/functions/mql5/python_metatrader5) |
| [NormalizeDouble](/en/bridge/functions/mql5/convert/normalizedouble) | Rounding of a floating point number to a specified accuracy | [Conversion Functions](/en/bridge/functions/mql5/convert) |
| [ObjectCreate](/en/bridge/functions/mql5/objects/objectcreate) | Creates an object of the specified type in a specified chart | [Object Functions](/en/bridge/functions/mql5/objects) |
| [ObjectDelete](/en/bridge/functions/mql5/objects/objectdelete) | Removes the object with the specified name from the specified chart (from the specified chart subwindow) | [Object Functions](/en/bridge/functions/mql5/objects) |
| [ObjectFind](/en/bridge/functions/mql5/objects/objectfind) | Searches for an object with the specified ID by the name | [Object Functions](/en/bridge/functions/mql5/objects) |
| [ObjectGetDouble](/en/bridge/functions/mql5/objects/objectgetdouble) | Returns the double value of the corresponding object property | [Object Functions](/en/bridge/functions/mql5/objects) |
| [ObjectGetInteger](/en/bridge/functions/mql5/objects/objectgetinteger) | Returns the integer value of the corresponding object property | [Object Functions](/en/bridge/functions/mql5/objects) |
| [ObjectGetString](/en/bridge/functions/mql5/objects/objectgetstring) | Returns the string value of the corresponding object property | [Object Functions](/en/bridge/functions/mql5/objects) |
| [ObjectGetTimeByValue](/en/bridge/functions/mql5/objects/objectgettimebyvalue) | Returns the time value for the specified object price value | [Object Functions](/en/bridge/functions/mql5/objects) |
| [ObjectGetValueByTime](/en/bridge/functions/mql5/objects/objectgetvaluebytime) | Returns the price value of an object for the specified time | [Object Functions](/en/bridge/functions/mql5/objects) |
| [ObjectMove](/en/bridge/functions/mql5/objects/objectmove) | Changes the coordinates of the specified object anchor point | [Object Functions](/en/bridge/functions/mql5/objects) |
| [ObjectName](/en/bridge/functions/mql5/objects/objectname) | Returns the name of an object of the corresponding type in the specified chart (specified chart subwindow) | [Object Functions](/en/bridge/functions/mql5/objects) |
| [ObjectsDeleteAll](/en/bridge/functions/mql5/objects/objectdeleteall) | Removes all objects of the specified type from the specified chart (from the specified chart subwindow) | [Object Functions](/en/bridge/functions/mql5/objects) |
| [ObjectSetDouble](/en/bridge/functions/mql5/objects/objectsetdouble) | Sets the value of the corresponding object property | [Object Functions](/en/bridge/functions/mql5/objects) |
| [ObjectSetInteger](/en/bridge/functions/mql5/objects/objectsetinteger) | Sets the value of the corresponding object property | [Object Functions](/en/bridge/functions/mql5/objects) |
| [ObjectSetString](/en/bridge/functions/mql5/objects/objectsetstring) | Sets the value of the corresponding object property | [Object Functions](/en/bridge/functions/mql5/objects) |
| [ObjectsTotal](/en/bridge/functions/mql5/objects/objectstotal) | Returns the number of objects of the specified type in the specified chart (specified chart subwindow) | [Object Functions](/en/bridge/functions/mql5/objects) |
| [OnStart](/en/bridge/functions/mql5/event_handlers/onstart) | The function is called when the [Start](/en/bridge/functions/mql5/runtime/event_fire#start) event occurs to perform actions set in the script | [Event Handling](/en/bridge/functions/mql5/event_handlers) |
| [OnInit](/en/bridge/functions/mql5/event_handlers/oninit) | The function is called in indicators and EAs when the [Init](/en/bridge/functions/mql5/runtime/event_fire#init) event occurs to initialize a launched MQL5 program | [Event Handling](/en/bridge/functions/mql5/event_handlers) |
| [OnDeinit](/en/bridge/functions/mql5/event_handlers/ondeinit) | The function is called in indicators and EAs when the [Deinit](/en/bridge/functions/mql5/runtime/event_fire#deinit) event occurs to de-initialize a launched MQL5 program | [Event Handling](/en/bridge/functions/mql5/event_handlers) |
| [OnTick](/en/bridge/functions/mql5/event_handlers/ontick) | The function is called in EAs when the [NewTick](/en/bridge/functions/mql5/runtime/event_fire#newtick) event occurs to handle a new quote | [Event Handling](/en/bridge/functions/mql5/event_handlers) |
| [OnCalculate](/en/bridge/functions/mql5/event_handlers/oncalculate) | The function is called in indicators when the [Calculate](/en/bridge/functions/mql5/runtime/event_fire#calculate) event occurs to handle price data changes | [Event Handling](/en/bridge/functions/mql5/event_handlers) |
| [OnTimer](/en/bridge/functions/mql5/event_handlers/ontimer) | The function is called in indicators and EAs during the [Timer](/en/bridge/functions/mql5/runtime/event_fire#timer) periodic event generated by the terminal at fixed time intervals | [Event Handling](/en/bridge/functions/mql5/event_handlers) |
| [OnTrade](/en/bridge/functions/mql5/event_handlers/ontrade) | The function is called in EAs during the [Trade](/en/bridge/functions/mql5/runtime/event_fire#trade) event generated at the end of a trading operation on a trade server | [Event Handling](/en/bridge/functions/mql5/event_handlers) |
| [OnTradeTransaction](/en/bridge/functions/mql5/event_handlers/ontradetransaction) | The function is called in EAs when the [TradeTransaction](/en/bridge/functions/mql5/runtime/event_fire#tradetransaction) event occurs to process a trade request execution results | [Event Handling](/en/bridge/functions/mql5/event_handlers) |
| [OnBookEvent](/en/bridge/functions/mql5/event_handlers/onbookevent) | The function is called in EAs when the [BookEvent](/en/bridge/functions/mql5/runtime/event_fire#bookevent) event occurs to process changes in the market depth | [Event Handling](/en/bridge/functions/mql5/event_handlers) |
| [OnChartEvent](/en/bridge/functions/mql5/event_handlers/onchartevent) | The function is called in indicators and EAs when the [ChartEvent](/en/bridge/functions/mql5/runtime/event_fire#chartevent) event occurs to process chart changes made by a user or an MQL5 program | [Event Handling](/en/bridge/functions/mql5/event_handlers) |
| [OnTester](/en/bridge/functions/mql5/event_handlers/ontester) | The function is called in EAs when the [Tester](/en/bridge/functions/mql5/runtime/event_fire#tester) event occurs to perform necessary actions after testing an EA on history data | [Event Handling](/en/bridge/functions/mql5/event_handlers) |
| [OnTesterInit](/en/bridge/functions/mql5/event_handlers/ontesterinit) | The function is called in EAs when the [TesterInit](/en/bridge/functions/mql5/runtime/event_fire#testerinit) event occurs to perform necessary actions before optimization in the strategy tester | [Event Handling](/en/bridge/functions/mql5/event_handlers) |
| [OnTesterDeinit](/en/bridge/functions/mql5/event_handlers/ontesterdeinit) | The function is called in EAs when the [TesterDeinit](/en/bridge/functions/mql5/runtime/event_fire#testerdeinit) event occurs after EA optimization in the strategy tester | [Event Handling](/en/bridge/functions/mql5/event_handlers) |
| [OnTesterPass](/en/bridge/functions/mql5/event_handlers/ontesterpass) | The function is called in EAs when the [TesterPass](/en/bridge/functions/mql5/runtime/event_fire#testerpass) even occurs to handle an arrival of a new data frame during EA optimization in the strategy tester | [Event Handling](/en/bridge/functions/mql5/event_handlers) |
| [OrderCalcMargin](/en/bridge/functions/mql5/trading/ordercalcmargin) | Calculates the margin required for the specified order type, in the deposit currency | [Trade Functions](/en/bridge/functions/mql5/trading) |
| [OrderCalcProfit](/en/bridge/functions/mql5/trading/ordercalcprofit) | Calculates the profit based on the parameters passed, in the deposit currency | [Trade Functions](/en/bridge/functions/mql5/trading) |
| [OrderCheck](/en/bridge/functions/mql5/trading/ordercheck) | Checks if there are enough funds to execute the required [trade operation](/en/bridge/functions/mql5/constants/tradingconstants/enum_trade_request_actions). | [Trade Functions](/en/bridge/functions/mql5/trading) |
| [OrderGetDouble](/en/bridge/functions/mql5/trading/ordergetdouble) | Returns the requested property of the order (double) | [Trade Functions](/en/bridge/functions/mql5/trading) |
| [OrderGetInteger](/en/bridge/functions/mql5/trading/ordergetinteger) | Returns the requested property of the order (datetime or int) | [Trade Functions](/en/bridge/functions/mql5/trading) |
| [OrderGetString](/en/bridge/functions/mql5/trading/ordergetstring) | Returns the requested property of the order (string) | [Trade Functions](/en/bridge/functions/mql5/trading) |
| [OrderGetTicket](/en/bridge/functions/mql5/trading/ordergetticket) | Return the ticket of a corresponding order | [Trade Functions](/en/bridge/functions/mql5/trading) |
| [OrderSelect](/en/bridge/functions/mql5/trading/orderselect) | Selects a order for further working with it | [Trade Functions](/en/bridge/functions/mql5/trading) |
| [OrderSend](/en/bridge/functions/mql5/trading/ordersend) | Sends [trade requests](/en/bridge/functions/mql5/constants/structures/mqltraderequest) to a server | [Trade Functions](/en/bridge/functions/mql5/trading) |
| [OrderSendAsync](/en/bridge/functions/mql5/trading/ordersendasync) | Asynchronously sends [trade requests](/en/bridge/functions/mql5/constants/tradingconstants/enum_trade_request_actions) without waiting for the trade response of the trade server | [Trade Functions](/en/bridge/functions/mql5/trading) |
| [OrdersTotal](/en/bridge/functions/mql5/trading/orderstotal) | Returns the number of orders | [Trade Functions](/en/bridge/functions/mql5/trading) |
| [ParameterGetRange](/en/bridge/functions/mql5/optimization_frames/parametergetrange) | Receives data on the values range and the change step for an [input variable](/en/bridge/functions/mql5/basis/variables/inputvariables) when optimizing an Expert Advisor in the Strategy Tester | [Working with Optimization Results](/en/bridge/functions/mql5/optimization_frames) |
| [ParameterSetRange](/en/bridge/functions/mql5/optimization_frames/parametersetrange) | Specifies the use of [input variable](/en/bridge/functions/mql5/basis/variables/inputvariables) when optimizing an Expert Advisor in the Strategy Tester: value, change step, initial and final values | [Working with Optimization Results](/en/bridge/functions/mql5/optimization_frames) |
| [Period](/en/bridge/functions/mql5/check/period) | Returns the current chart timeframe | [Checkup](/en/bridge/functions/mql5/check) |
| [PeriodSeconds](/en/bridge/functions/mql5/common/periodseconds) | Returns the number of seconds in the period | [Common Functions](/en/bridge/functions/mql5/common) |
| [PlaySound](/en/bridge/functions/mql5/common/playsound) | Plays a sound file | [Common Functions](/en/bridge/functions/mql5/common) |
| [PlotIndexGetInteger](/en/bridge/functions/mql5/customind/plotindexgetinteger) | Returns the value of an indicator line property of the [integer](/en/bridge/functions/mql5/basis/types/integer/integertypes) type | [Custom Indicators](/en/bridge/functions/mql5/customind) |
| [PlotIndexSetDouble](/en/bridge/functions/mql5/customind/plotindexsetdouble) | Sets the value of an indicator line property of the type [double](/en/bridge/functions/mql5/basis/types/double) | [Custom Indicators](/en/bridge/functions/mql5/customind) |
| [PlotIndexSetInteger](/en/bridge/functions/mql5/customind/plotindexsetinteger) | Sets the value of an indicator line property of the [int](/en/bridge/functions/mql5/basis/types/integer/integertypes) type | [Custom Indicators](/en/bridge/functions/mql5/customind) |
| [PlotIndexSetString](/en/bridge/functions/mql5/customind/plotindexsetstring) | Sets the value of an indicator line property of the [string](/en/bridge/functions/mql5/basis/types/stringconst) type | [Custom Indicators](/en/bridge/functions/mql5/customind) |
| [Point](/en/bridge/functions/mql5/check/point) | Returns the point size of the current symbol in the quote currency | [Checkup](/en/bridge/functions/mql5/check) |
| [PositionGetDouble](/en/bridge/functions/mql5/trading/positiongetdouble) | Returns the requested property of an open position (double) | [Trade Functions](/en/bridge/functions/mql5/trading) |
| [PositionGetInteger](/en/bridge/functions/mql5/trading/positiongetinteger) | Returns the requested property of an open position (datetime or int) | [Trade Functions](/en/bridge/functions/mql5/trading) |
| [PositionGetString](/en/bridge/functions/mql5/trading/positiongetstring) | Returns the requested property of an open position (string) | [Trade Functions](/en/bridge/functions/mql5/trading) |
| [PositionGetSymbol](/en/bridge/functions/mql5/trading/positiongetsymbol) | Returns the symbol corresponding to the open position | [Trade Functions](/en/bridge/functions/mql5/trading) |
| [PositionGetTicket](/en/bridge/functions/mql5/trading/positiongetticket) | Returns the ticket of the position with the specified index in the list of open positions | [Trade Functions](/en/bridge/functions/mql5/trading) |
| [PositionSelect](/en/bridge/functions/mql5/trading/positionselect) | Chooses an open position for further working with it | [Trade Functions](/en/bridge/functions/mql5/trading) |
| [PositionSelectByTicket](/en/bridge/functions/mql5/trading/positionselectbyticket) | Selects a position to work with by the ticket number specified in it | [Trade Functions](/en/bridge/functions/mql5/trading) |
| [PositionsTotal](/en/bridge/functions/mql5/trading/positionstotal) | Returns the number of open positions | [Trade Functions](/en/bridge/functions/mql5/trading) |
| [pow](/en/bridge/functions/mql5/math/mathpow) | Raises the base to the specified power | [Math Functions](/en/bridge/functions/mql5/math) |
| [Print](/en/bridge/functions/mql5/common/print) | Displays a message in the log | [Common Functions](/en/bridge/functions/mql5/common) |
| [PrintFormat](/en/bridge/functions/mql5/common/printformat) | Formats and prints the sets of symbols and values in a log file in accordance with a preset format | [Common Functions](/en/bridge/functions/mql5/common) |
| [rand](/en/bridge/functions/mql5/math/mathrand) | Returns a pseudorandom value within the range of 0 to 32767 | [Math Functions](/en/bridge/functions/mql5/math) |
| [ResetLastError](/en/bridge/functions/mql5/common/resetlasterror) | Sets the value of a predetermined variable [_LastError](/en/bridge/functions/mql5/predefined/_lasterror) to zero | [Common Functions](/en/bridge/functions/mql5/common) |
| [ResourceCreate](/en/bridge/functions/mql5/common/resourcecreate) | Creates an image resource based on a data set | [Common Functions](/en/bridge/functions/mql5/common) |
| [ResourceFree](/en/bridge/functions/mql5/common/resourcefree) | Deletes [dynamically created resource](/en/bridge/functions/mql5/common/resourcecreate#dynamic_resourcecreate) (freeing the memory allocated for it) | [Common Functions](/en/bridge/functions/mql5/common) |
| [ResourceReadImage](/en/bridge/functions/mql5/common/resourcereadimage) | Reads data from the graphical resource [created by ResourceCreate() function](/en/bridge/functions/mql5/common/resourcecreate#dynamic_resourcecreate) or [saved in EX5 file during compilation](/en/bridge/functions/mql5/runtime/resources#resource_include) | [Common Functions](/en/bridge/functions/mql5/common) |
| [ResourceSave](/en/bridge/functions/mql5/common/resourcesave) | Saves a resource into the specified file | [Common Functions](/en/bridge/functions/mql5/common) |
| [round](/en/bridge/functions/mql5/math/mathround) | Rounds of a value to the nearest integer | [Math Functions](/en/bridge/functions/mql5/math) |
| [SendFTP](/en/bridge/functions/mql5/network/sendftp) | Sends a file at the address specified in the settings window of the "FTP" tab | [Common Functions](/en/bridge/functions/mql5/common) |
| [SendMail](/en/bridge/functions/mql5/network/sendmail) | Sends an email at the address specified in the settings window of the "Email" tab | [Common Functions](/en/bridge/functions/mql5/common) |
| [SendNotification](/en/bridge/functions/mql5/network/sendnotification) | Sends push notifications to mobile terminals, whose MetaQuotes ID are specified in the "Notifications" tab | [Common Functions](/en/bridge/functions/mql5/common) |
| [SeriesInfoInteger](/en/bridge/functions/mql5/series/seriesinfointeger) | Returns information about the state of historical data | [Timeseries and Indicators Access](/en/bridge/functions/mql5/series) |
| [SetIndexBuffer](/en/bridge/functions/mql5/customind/setindexbuffer) | Binds the specified indicator buffer with one-dimensional dynamic [array](/en/bridge/functions/mql5/basis/variables#array_define) of the [double](/en/bridge/functions/mql5/basis/types/double) type | [Custom Indicators](/en/bridge/functions/mql5/customind) |
| [ShortArrayToString](/en/bridge/functions/mql5/convert/shortarraytostring) | Copying array part into a string | [Conversion Functions](/en/bridge/functions/mql5/convert) |
| [ShortToString](/en/bridge/functions/mql5/convert/shorttostring) | Converting symbol code (unicode) into one-symbol string | [Conversion Functions](/en/bridge/functions/mql5/convert) |
| [SignalBaseGetDouble](/en/bridge/functions/mql5/signals/signalbasegetdouble) | Returns the value of double type property for selected signal | [Trade Signals](/en/bridge/functions/mql5/signals) |
| [SignalBaseGetInteger](/en/bridge/functions/mql5/signals/signalbasegetinteger) | Returns the value of integer type property for selected signal | [Trade Signals](/en/bridge/functions/mql5/signals) |
| [SignalBaseGetString](/en/bridge/functions/mql5/signals/signalbasegetstring) | Returns the value of string type property for selected signal | [Trade Signals](/en/bridge/functions/mql5/signals) |
| [SignalBaseSelect](/en/bridge/functions/mql5/signals/signalbaseselect) | Selects a signal from signals, available in terminal for further working with it | [Trade Signals](/en/bridge/functions/mql5/signals) |
| [SignalBaseTotal](/en/bridge/functions/mql5/signals/signalbasetotal) | Returns the total amount of signals, available in terminal | [Trade Signals](/en/bridge/functions/mql5/signals) |
| [SignalInfoGetDouble](/en/bridge/functions/mql5/signals/signalinfogetdouble) | Returns the value of double type property of signal copy settings | [Trade Signals](/en/bridge/functions/mql5/signals) |
| [SignalInfoGetInteger](/en/bridge/functions/mql5/signals/signalinfogetinteger) | Returns the value of integer type property of signal copy settings | [Trade Signals](/en/bridge/functions/mql5/signals) |
| [SignalInfoGetString](/en/bridge/functions/mql5/signals/signalinfogetstring) | Returns the value of string type property of signal copy settings | [Trade Signals](/en/bridge/functions/mql5/signals) |
| [SignalInfoSetDouble](/en/bridge/functions/mql5/signals/signalinfosetdouble) | Sets the value of double type property of signal copy settings | [Trade Signals](/en/bridge/functions/mql5/signals) |
| [SignalInfoSetInteger](/en/bridge/functions/mql5/signals/signalinfosetinteger) | Sets the value of integer type property of signal copy settings | [Trade Signals](/en/bridge/functions/mql5/signals) |
| [SignalSubscribe](/en/bridge/functions/mql5/signals/signalsubscribe) | Subscribes to the trading signal | [Trade Signals](/en/bridge/functions/mql5/signals) |
| [SignalUnsubscribe](/en/bridge/functions/mql5/signals/signalunsubscribe) | Cancels subscription | [Trade Signals](/en/bridge/functions/mql5/signals) |
| [sin](/en/bridge/functions/mql5/math/mathsin) | Returns the sine of a number | [Math Functions](/en/bridge/functions/mql5/math) |
| [Sleep](/en/bridge/functions/mql5/common/sleep) | Suspends execution of the current Expert Advisor or script within a specified interval | [Common Functions](/en/bridge/functions/mql5/common) |
| [SocketCreate](/en/bridge/functions/mql5/network/socketcreate) | Create a socket with specified flags and return its handle | [Network Functions](/en/bridge/functions/mql5/network) |
| [SocketClose](/en/bridge/functions/mql5/network/socketclose) | Close a socket | [Network Functions](/en/bridge/functions/mql5/network) |
| [SocketConnect](/en/bridge/functions/mql5/network/socketconnect) | Connect to the server with timeout control | [Network Functions](/en/bridge/functions/mql5/network) |
| [SocketIsConnected](/en/bridge/functions/mql5/network/socketisconnected) | Checks if the socket is currently connected | [Network Functions](/en/bridge/functions/mql5/network) |
| [SocketIsReadable](/en/bridge/functions/mql5/network/socketisreadable) | Get a number of bytes that can be read from a socket | [Network Functions](/en/bridge/functions/mql5/network) |
| [SocketIsWritable](/en/bridge/functions/mql5/network/socketiswritable) | Check whether data can be written to a socket at the current time | [Network Functions](/en/bridge/functions/mql5/network) |
| [SocketTimeouts](/en/bridge/functions/mql5/network/sockettimeouts) | Set timeouts for receiving and sending data for a socket system object | [Network Functions](/en/bridge/functions/mql5/network) |
| [SocketRead](/en/bridge/functions/mql5/network/socketread) | Read data from a socket | [Network Functions](/en/bridge/functions/mql5/network) |
| [SocketSend](/en/bridge/functions/mql5/network/socketsend) | Write data to a socket | [Network Functions](/en/bridge/functions/mql5/network) |
| [SocketTlsHandshake](/en/bridge/functions/mql5/network/sockettlshandshake) | Initiate secure TLS (SSL) connection to a specified host via TLS Handshake protocol | [Network Functions](/en/bridge/functions/mql5/network) |
| [SocketTlsCertificate](/en/bridge/functions/mql5/network/sockettlscertificate) | Get data on the certificate used to secure network connection | [Network Functions](/en/bridge/functions/mql5/network) |
| [SocketTlsRead](/en/bridge/functions/mql5/network/sockettlsread) | Read data from secure TLS connection | [Network Functions](/en/bridge/functions/mql5/network) |
| [SocketTlsReadAvailable](/en/bridge/functions/mql5/network/sockettlsreadavailable) | Read all available data from secure TLS connection | [Network Functions](/en/bridge/functions/mql5/network) |
| [SocketTlsSend](/en/bridge/functions/mql5/network/sockettlssend) | Send data via secure TLS connection | [Network Functions](/en/bridge/functions/mql5/network) |
| [sqrt](/en/bridge/functions/mql5/math/mathsqrt) | Returns a square root | [Math Functions](/en/bridge/functions/mql5/math) |
| [srand](/en/bridge/functions/mql5/math/mathsrand) | Sets the starting point for generating a series of pseudorandom integers | [Math Functions](/en/bridge/functions/mql5/math) |
| [StringAdd](/en/bridge/functions/mql5/strings/stringadd) | Adds a string to the end of another string | [String Functions](/en/bridge/functions/mql5/strings) |
| [StringBufferLen](/en/bridge/functions/mql5/strings/stringbufferlen) | Returns the size of buffer allocated for the string | [String Functions](/en/bridge/functions/mql5/strings) |
| [StringCompare](/en/bridge/functions/mql5/strings/stringcompare) | Compares two strings and returns 1 if the first string is greater than the second; 0 - if the strings are equal; -1 (minus 1) - if the first string is less than the second one | [String Functions](/en/bridge/functions/mql5/strings) |
| [StringConcatenate](/en/bridge/functions/mql5/strings/stringconcatenate) | Forms a string of parameters passed | [String Functions](/en/bridge/functions/mql5/strings) |
| [StringFill](/en/bridge/functions/mql5/strings/stringfill) | Fills out a specified string by selected symbols | [String Functions](/en/bridge/functions/mql5/strings) |
| [StringFind](/en/bridge/functions/mql5/strings/stringfind) | Search for a substring in a string | [String Functions](/en/bridge/functions/mql5/strings) |
| [StringFormat](/en/bridge/functions/mql5/convert/stringformat) | Converting number into string according to preset format | [Conversion Functions](/en/bridge/functions/mql5/convert) |
| [StringGetCharacter](/en/bridge/functions/mql5/strings/stringgetcharacter) | Returns the value of a number located in the specified string position | [String Functions](/en/bridge/functions/mql5/strings) |
| [StringInit](/en/bridge/functions/mql5/strings/stringinit) | Initializes string by specified symbols and provides the specified string length | [String Functions](/en/bridge/functions/mql5/strings) |
| [StringLen](/en/bridge/functions/mql5/strings/stringlen) | Returns the number of symbols in a string | [String Functions](/en/bridge/functions/mql5/strings) |
| [StringReplace](/en/bridge/functions/mql5/strings/stringreplace) | Replaces all the found substrings of a string by a set sequence of symbols | [String Functions](/en/bridge/functions/mql5/strings) |
| [StringSetCharacter](/en/bridge/functions/mql5/strings/stringsetcharacter) | Returns a copy of a string with a changed value of a symbol in a specified position | [String Functions](/en/bridge/functions/mql5/strings) |
| [StringSplit](/en/bridge/functions/mql5/strings/stringsplit) | Gets substrings by a specified separator from the specified string, returns the number of substrings obtained | [String Functions](/en/bridge/functions/mql5/strings) |
| [StringSubstr](/en/bridge/functions/mql5/strings/stringsubstr) | Extracts a substring from a text string starting from a specified position | [String Functions](/en/bridge/functions/mql5/strings) |
| [StringToCharArray](/en/bridge/functions/mql5/convert/stringtochararray) | Symbol-wise copying a string converted from Unicode to ANSI, to a selected place of array of uchar type | [Conversion Functions](/en/bridge/functions/mql5/convert) |
| [StringToColor](/en/bridge/functions/mql5/convert/stringtocolor) | Converting "R,G,B" string or string with color name into color type value | [Conversion Functions](/en/bridge/functions/mql5/convert) |
| [StringToDouble](/en/bridge/functions/mql5/convert/stringtodouble) | Converting a string containing a symbol representation of number into number of double type | [Conversion Functions](/en/bridge/functions/mql5/convert) |
| [StringToInteger](/en/bridge/functions/mql5/convert/stringtointeger) | Converting a string containing a symbol representation of number into number of int type | [Conversion Functions](/en/bridge/functions/mql5/convert) |
| [StringToLower](/en/bridge/functions/mql5/strings/stringtolower) | Transforms all symbols of a selected string to lowercase | [String Functions](/en/bridge/functions/mql5/strings) |
| [StringToShortArray](/en/bridge/functions/mql5/convert/stringtoshortarray) | Symbol-wise copying a string to a selected part of array of ushort type | [Conversion Functions](/en/bridge/functions/mql5/convert) |
| [StringToTime](/en/bridge/functions/mql5/convert/stringtotime) | Converting a string containing time or date in "yyyy.mm.dd \[hh:mi\]" format into datetime type | [Conversion Functions](/en/bridge/functions/mql5/convert) |
| [StringToUpper](/en/bridge/functions/mql5/strings/stringtoupper) | Transforms all symbols of a selected string into capitals | [String Functions](/en/bridge/functions/mql5/strings) |
| [StringTrimLeft](/en/bridge/functions/mql5/strings/stringtrimleft) | Cuts line feed characters, spaces and tabs in the left part of the string | [String Functions](/en/bridge/functions/mql5/strings) |
| [StringTrimRight](/en/bridge/functions/mql5/strings/stringtrimright) | Cuts line feed characters, spaces and tabs in the right part of the string | [String Functions](/en/bridge/functions/mql5/strings) |
| [StructToTime](/en/bridge/functions/mql5/dateandtime/structtotime) | Converts a variable of MqlDateTime structure type into a datetime value | [Date and Time](/en/bridge/functions/mql5/dateandtime) |
| [Symbol](/en/bridge/functions/mql5/check/symbol) | Returns the name of a symbol of the current chart | [Checkup](/en/bridge/functions/mql5/check) |
| [SymbolInfoDouble](/en/bridge/functions/mql5/marketinformation/symbolinfodouble) | Returns the double value of the symbol for the corresponding property | [Market Info](/en/bridge/functions/mql5/marketinformation) |
| [SymbolInfoInteger](/en/bridge/functions/mql5/marketinformation/symbolinfointeger) | Returns a value of an integer type (long, datetime, int or bool) of a specified symbol for the corresponding property | [Market Info](/en/bridge/functions/mql5/marketinformation) |
| [SymbolInfoMarginRate](/en/bridge/functions/mql5/marketinformation/symbolinfomarginrate) | Returns the margin rates depending on the order type and direction | [Market Info](/en/bridge/functions/mql5/marketinformation) |
| [SymbolInfoSessionQuote](/en/bridge/functions/mql5/marketinformation/symbolinfosessionquote) | Allows receiving time of beginning and end of the specified quoting sessions for a specified symbol and day of week. | [Market Info](/en/bridge/functions/mql5/marketinformation) |
| [SymbolInfoSessionTrade](/en/bridge/functions/mql5/marketinformation/symbolinfosessiontrade) | Allows receiving time of beginning and end of the specified trading sessions for a specified symbol and day of week. | [Market Info](/en/bridge/functions/mql5/marketinformation) |
| [SymbolInfoString](/en/bridge/functions/mql5/marketinformation/symbolinfostring) | Returns a value of the string type of a specified symbol for the corresponding property | [Market Info](/en/bridge/functions/mql5/marketinformation) |
| [SymbolInfoTick](/en/bridge/functions/mql5/marketinformation/symbolinfotick) | Returns the current prices for the specified symbol in a variable of the [MqlTick](/en/bridge/functions/mql5/constants/structures/mqltick) type | [Market Info](/en/bridge/functions/mql5/marketinformation) |
| [SymbolIsSynchronized](/en/bridge/functions/mql5/marketinformation/symbolissynchronized) | Checks whether data of a selected symbol in the terminal are [synchronized](/en/bridge/functions/mql5/series/timeseries_access#synchronized) with data on the trade server | [Market Info](/en/bridge/functions/mql5/marketinformation) |
| [SymbolName](/en/bridge/functions/mql5/marketinformation/symbolname) | Returns the name of a specified symbol | [Market Info](/en/bridge/functions/mql5/marketinformation) |
| [SymbolSelect](/en/bridge/functions/mql5/marketinformation/symbolselect) | Selects a symbol in the Market Watch window or removes a symbol from the window | [Market Info](/en/bridge/functions/mql5/marketinformation) |
| [SymbolsTotal](/en/bridge/functions/mql5/marketinformation/symbolstotal) | Returns the number of available (selected in Market Watch or all) symbols | [Market Info](/en/bridge/functions/mql5/marketinformation) |
| [tan](/en/bridge/functions/mql5/math/mathtan) | Returns the tangent of a number | [Math Functions](/en/bridge/functions/mql5/math) |
| [TerminalClose](/en/bridge/functions/mql5/common/terminalclose) | Commands the terminal to complete operation | [Common Functions](/en/bridge/functions/mql5/common) |
| [TerminalInfoDouble](/en/bridge/functions/mql5/check/terminalinfodouble) | Returns an double value of a corresponding property of the mql5 program environment | [Checkup](/en/bridge/functions/mql5/check) |
| [TerminalInfoInteger](/en/bridge/functions/mql5/check/terminalinfointeger) | Returns an integer value of a corresponding property of the mql5 program environment | [Checkup](/en/bridge/functions/mql5/check) |
| [TerminalInfoString](/en/bridge/functions/mql5/check/terminalinfostring) | Returns a string value of a corresponding property of the mql5 program environment | [Checkup](/en/bridge/functions/mql5/check) |
| [TesterStatistics](/en/bridge/functions/mql5/common/testerstatistics) | It returns the value of a specified statistic calculated based on testing results | [Common Functions](/en/bridge/functions/mql5/common) |
| [TextGetSize](/en/bridge/functions/mql5/objects/textgetsize) | Returns the string's width and height at the current [font settings](/en/bridge/functions/mql5/objects/textsetfont) | [Object Functions](/en/bridge/functions/mql5/objects) |
| [TextOut](/en/bridge/functions/mql5/objects/textout) | Transfers the text to the custom array (buffer) designed for creation of a graphical [resource](/en/bridge/functions/mql5/common/resourcecreate) | [Object Functions](/en/bridge/functions/mql5/objects) |
| [TextSetFont](/en/bridge/functions/mql5/objects/textsetfont) | Sets the font for displaying the text using drawing methods (Arial 20 used by default) | [Object Functions](/en/bridge/functions/mql5/objects) |
| [TimeCurrent](/en/bridge/functions/mql5/dateandtime/timecurrent) | Returns the last known server time (time of the last quote receipt) in the datetime format | [Date and Time](/en/bridge/functions/mql5/dateandtime) |
| [TimeDaylightSavings](/en/bridge/functions/mql5/dateandtime/timedaylightsavings) | Returns the sign of Daylight Saving Time switch | [Date and Time](/en/bridge/functions/mql5/dateandtime) |
| [TimeGMT](/en/bridge/functions/mql5/dateandtime/timegmt) | Returns GMT in datetime format with the Daylight Saving Time by local time of the computer, where the client terminal is running | [Date and Time](/en/bridge/functions/mql5/dateandtime) |
| [TimeGMTOffset](/en/bridge/functions/mql5/dateandtime/timegmtoffset) | Returns the current difference between GMT time and the local computer time in seconds, taking into account DST switch | [Date and Time](/en/bridge/functions/mql5/dateandtime) |
| [TimeLocal](/en/bridge/functions/mql5/dateandtime/timelocal) | Returns the local computer time in datetime format | [Date and Time](/en/bridge/functions/mql5/dateandtime) |
| [TimeToString](/en/bridge/functions/mql5/convert/timetostring) | Converting a value containing time in seconds elapsed since 01.01.1970 into a string of "yyyy.mm.dd hh:mi" format | [Conversion Functions](/en/bridge/functions/mql5/convert) |
| [TimeToStruct](/en/bridge/functions/mql5/dateandtime/timetostruct) | Converts a datetime value into a variable of MqlDateTime structure type | [Date and Time](/en/bridge/functions/mql5/dateandtime) |
| [TimeTradeServer](/en/bridge/functions/mql5/dateandtime/timetradeserver) | Returns the current calculation time of the trade server | [Date and Time](/en/bridge/functions/mql5/dateandtime) |
| [UninitializeReason](/en/bridge/functions/mql5/check/uninitializereason) | Returns the code of the reason for deinitialization | [Checkup](/en/bridge/functions/mql5/check) |
| [WebRequest](/en/bridge/functions/mql5/network/webrequest) | Sends HTTP request to the specified server | [Common Functions](/en/bridge/functions/mql5/common) |
| [ZeroMemory](/en/bridge/functions/mql5/common/zeromemory) | Resets a variable passed to it by reference. The variable can be of any type, except for classes and structures that have constructors. | [Common Functions](/en/bridge/functions/mql5/common) |

## MQL4 Functions
:::warning Content Copyright
This content comes from MQL4 Documentation and is subject to the [MQL4 Terms](https://www.mql4.com/about/terms).
:::

The following functions are available to the bridge:
| Function | Action | Section |
| --- | --- | --- |
| [AccountBalance](/en/bridge/functions/mql4/account/accountbalance) | Returns balance value of the current account | [Account Information](/en/bridge/functions/mql4/account) |
| [AccountCompany](/en/bridge/functions/mql4/account/accountcompany) | Returns the brokerage company name where the current account was registered | [Account Information](/en/bridge/functions/mql4/account) |
| [AccountCredit](/en/bridge/functions/mql4/account/accountcredit) | Returns credit value of the current account | [Account Information](/en/bridge/functions/mql4/account) |
| [AccountCurrency](/en/bridge/functions/mql4/account/accountcurrency) | Returns currency name of the current account | [Account Information](/en/bridge/functions/mql4/account) |
| [AccountEquity](/en/bridge/functions/mql4/account/accountequity) | Returns equity value of the current account | [Account Information](/en/bridge/functions/mql4/account) |
| [AccountFreeMargin](/en/bridge/functions/mql4/account/accountfreemargin) | Returns free margin value of the current account | [Account Information](/en/bridge/functions/mql4/account) |
| [AccountFreeMarginCheck](/en/bridge/functions/mql4/account/accountfreemargincheck) | Returns free margin that remains after the specified position has been opened at the current price on the current account | [Account Information](/en/bridge/functions/mql4/account) |
| [AccountFreeMarginMode](/en/bridge/functions/mql4/account/accountfreemarginmode) | Calculation mode of free margin allowed to open orders on the current account | [Account Information](/en/bridge/functions/mql4/account) |
| [AccountInfoDouble](/en/bridge/functions/mql4/account/accountinfodouble) | Returns a value of double type of the corresponding account property | [Account Information](/en/bridge/functions/mql4/account) |
| [AccountInfoInteger](/en/bridge/functions/mql4/account/accountinfointeger) | Returns a value of integer type (bool, int or long) of the corresponding account property | [Account Information](/en/bridge/functions/mql4/account) |
| [AccountInfoString](/en/bridge/functions/mql4/account/accountinfostring) | Returns a value string type corresponding account property | [Account Information](/en/bridge/functions/mql4/account) |
| [AccountLeverage](/en/bridge/functions/mql4/account/accountleverage) | Returns leverage of the current account | [Account Information](/en/bridge/functions/mql4/account) |
| [AccountMargin](/en/bridge/functions/mql4/account/accountmargin) | Returns margin value of the current account | [Account Information](/en/bridge/functions/mql4/account) |
| [AccountName](/en/bridge/functions/mql4/account/accountname) | Returns the current account name | [Account Information](/en/bridge/functions/mql4/account) |
| [AccountNumber](/en/bridge/functions/mql4/account/accountnumber) | Returns the current account number | [Account Information](/en/bridge/functions/mql4/account) |
| [AccountProfit](/en/bridge/functions/mql4/account/accountprofit) | Returns profit value of the current account | [Account Information](/en/bridge/functions/mql4/account) |
| [AccountServer](/en/bridge/functions/mql4/account/accountserver) | Returns the connected server name | [Account Information](/en/bridge/functions/mql4/account) |
| [AccountStopoutLevel](/en/bridge/functions/mql4/account/accountstopoutlevel) | Returns the value of the Stop Out level | [Account Information](/en/bridge/functions/mql4/account) |
| [AccountStopoutMode](/en/bridge/functions/mql4/account/accountstopoutmode) | Returns the calculation mode for the Stop Out level | [Account Information](/en/bridge/functions/mql4/account) |
| [acos](/en/bridge/functions/mql4/math/matharccos) | Returns the arc cosine of x in radians | [Math Functions](/en/bridge/functions/mql4/math) |
| [Alert](/en/bridge/functions/mql4/common/alert) | Displays a message in a separate window | [Common Functions](/en/bridge/functions/mql4/common) |
| [ArrayBsearch](/en/bridge/functions/mql4/array/arraybsearch) | Returns index of the first found element in the first array dimension | [Array Functions](/en/bridge/functions/mql4/array) |
| [ArrayCompare](/en/bridge/functions/mql4/array/arraycompare) | Returns the result of comparing two arrays of [simple types](/en/bridge/functions/mql4/basis/types#base_types) or custom structures without [complex objects](/en/bridge/functions/mql4/basis/types#complex_types) | [Array Functions](/en/bridge/functions/mql4/array) |
| [ArrayCopy](/en/bridge/functions/mql4/array/arraycopy) | Copies one array into another | [Array Functions](/en/bridge/functions/mql4/array) |
| [ArrayCopyRates](/en/bridge/functions/mql4/array/arraycopyrates) | Copies rates to the two-dimensional array from chart RateInfo array returns copied bars amount | [Array Functions](/en/bridge/functions/mql4/array) |
| [ArrayCopySeries](/en/bridge/functions/mql4/array/arraycopyseries) | Copies a series array to another one and returns the count of the copied elements | [Array Functions](/en/bridge/functions/mql4/array) |
| [ArrayDimension](/en/bridge/functions/mql4/array/arraydimension) | Returns the multidimensional array rank | [Array Functions](/en/bridge/functions/mql4/array) |
| [ArrayFill](/en/bridge/functions/mql4/array/arrayfill) | Fills an array with the specified value | [Array Functions](/en/bridge/functions/mql4/array) |
| [ArrayFree](/en/bridge/functions/mql4/array/arrayfree) | Frees up buffer of any dynamic array and sets the size of the zero dimension in 0. | [Array Functions](/en/bridge/functions/mql4/array) |
| [ArrayGetAsSeries](/en/bridge/functions/mql4/array/arraygetasseries) | Checks direction of array indexing | [Array Functions](/en/bridge/functions/mql4/array) |
| [ArrayInitialize](/en/bridge/functions/mql4/array/arrayinitialize) | Sets all elements of a numeric array into a single value | [Array Functions](/en/bridge/functions/mql4/array) |
| [ArrayIsDynamic](/en/bridge/functions/mql4/array/arrayisdynamic) | Checks whether an array is dynamic | [Array Functions](/en/bridge/functions/mql4/array) |
| [ArrayIsSeries](/en/bridge/functions/mql4/array/arrayisseries) | Checks whether an array is a timeseries | [Array Functions](/en/bridge/functions/mql4/array) |
| [ArrayMaximum](/en/bridge/functions/mql4/array/arraymaximum) | Search for an element with the maximal value | [Array Functions](/en/bridge/functions/mql4/array) |
| [ArrayMinimum](/en/bridge/functions/mql4/array/arrayminimum) | Search for an element with the minimal value | [Array Functions](/en/bridge/functions/mql4/array) |
| [ArrayRange](/en/bridge/functions/mql4/array/arrayrange) | Returns the number of elements in the specified dimension of the array | [Array Functions](/en/bridge/functions/mql4/array) |
| [ArrayResize](/en/bridge/functions/mql4/array/arrayresize) | Sets the new size in the first dimension of the array | [Array Functions](/en/bridge/functions/mql4/array) |
| [ArraySetAsSeries](/en/bridge/functions/mql4/array/arraysetasseries) | Sets the direction of array indexing | [Array Functions](/en/bridge/functions/mql4/array) |
| [ArraySize](/en/bridge/functions/mql4/array/arraysize) | Returns the number of elements in the array | [Array Functions](/en/bridge/functions/mql4/array) |
| [ArraySort](/en/bridge/functions/mql4/array/arraysort) | Sorting of numeric arrays by the first dimension | [Array Functions](/en/bridge/functions/mql4/array) |
| [asin](/en/bridge/functions/mql4/math/matharcsin) | Returns the arc sine of x in radians | [Math Functions](/en/bridge/functions/mql4/math) |
| [atan](/en/bridge/functions/mql4/math/matharctan) | Returns the arc tangent of x in radians | [Math Functions](/en/bridge/functions/mql4/math) |
| [Bars](/en/bridge/functions/mql4/series/barsfunction) | Returns the number of bars count in the history for a specified symbol and period | [Timeseries and Indicators Access](/en/bridge/functions/mql4/series) |
| [ceil](/en/bridge/functions/mql4/math/mathceil) | Returns integer numeric value closest from above | [Math Functions](/en/bridge/functions/mql4/math) |
| [CharArrayToString](/en/bridge/functions/mql4/convert/chararraytostring) | Converting symbol code (ansi) into one-symbol array | [Conversion Functions](/en/bridge/functions/mql4/convert) |
| [ChartApplyTemplate](/en/bridge/functions/mql4/chart_operations/chartapplytemplate) | Applies a specific template from a specified file to the chart | [Chart Operations](/en/bridge/functions/mql4/chart_operations) |
| [ChartClose](/en/bridge/functions/mql4/chart_operations/chartclose) | Closes the specified chart | [Chart Operations](/en/bridge/functions/mql4/chart_operations) |
| [ChartFirst](/en/bridge/functions/mql4/chart_operations/chartfirst) | Returns the ID of the first chart of the client terminal | [Chart Operations](/en/bridge/functions/mql4/chart_operations) |
| [ChartGetDouble](/en/bridge/functions/mql4/chart_operations/chartgetdouble) | Returns the double value property of the specified chart | [Chart Operations](/en/bridge/functions/mql4/chart_operations) |
| [ChartGetInteger](/en/bridge/functions/mql4/chart_operations/chartgetinteger) | Returns the integer value property of the specified chart | [Chart Operations](/en/bridge/functions/mql4/chart_operations) |
| [ChartGetString](/en/bridge/functions/mql4/chart_operations/chartgetstring) | Returns the string value property of the specified chart | [Chart Operations](/en/bridge/functions/mql4/chart_operations) |
| [ChartID](/en/bridge/functions/mql4/chart_operations/chartid) | Returns the ID of the current chart | [Chart Operations](/en/bridge/functions/mql4/chart_operations) |
| [ChartIndicatorDelete](/en/bridge/functions/mql4/chart_operations/chartindicatordelete) | Removes an indicator with a specified name from the specified chart window | [Chart Operations](/en/bridge/functions/mql4/chart_operations) |
| [ChartIndicatorName](/en/bridge/functions/mql4/chart_operations/chartindicatorname) | Returns the short name of the indicator by the number in the indicators list on the specified chart window | [Chart Operations](/en/bridge/functions/mql4/chart_operations) |
| [ChartIndicatorsTotal](/en/bridge/functions/mql4/chart_operations/chartindicatorstotal) | Returns the number of all indicators applied to the specified chart window. | [Chart Operations](/en/bridge/functions/mql4/chart_operations) |
| [ChartNavigate](/en/bridge/functions/mql4/chart_operations/chartnavigate) | Performs shift of the specified chart by the specified number of bars relative to the specified position in the chart | [Chart Operations](/en/bridge/functions/mql4/chart_operations) |
| [ChartNext](/en/bridge/functions/mql4/chart_operations/chartnext) | Returns the chart ID of the chart next to the specified one | [Chart Operations](/en/bridge/functions/mql4/chart_operations) |
| [ChartOpen](/en/bridge/functions/mql4/chart_operations/chartopen) | Opens a new chart with the specified symbol and period | [Chart Operations](/en/bridge/functions/mql4/chart_operations) |
| [CharToStr](/en/bridge/functions/mql4/convert/chartostr) | Conversion of the symbol code into a one-character string | [Conversion Functions](/en/bridge/functions/mql4/convert) |
| [CharToString](/en/bridge/functions/mql4/convert/chartostring) | Converting a symbol code into a one-character string | [Conversion Functions](/en/bridge/functions/mql4/convert) |
| [ChartPeriod](/en/bridge/functions/mql4/chart_operations/chartperiod) | Returns the period value of the specified chart | [Chart Operations](/en/bridge/functions/mql4/chart_operations) |
| [ChartPriceOnDropped](/en/bridge/functions/mql4/chart_operations/chartpriceondropped) | Returns the price coordinate of the chart point, the Expert Advisor or script has been dropped to | [Chart Operations](/en/bridge/functions/mql4/chart_operations) |
| [ChartRedraw](/en/bridge/functions/mql4/chart_operations/chartredraw) | Calls a forced redrawing of a specified chart | [Chart Operations](/en/bridge/functions/mql4/chart_operations) |
| [ChartSaveTemplate](/en/bridge/functions/mql4/chart_operations/chartsavetemplate) | Saves current chart settings in a template with a specified name | [Chart Operations](/en/bridge/functions/mql4/chart_operations) |
| [ChartScreenShot](/en/bridge/functions/mql4/chart_operations/chartscreenshot) | Provides a screenshot of the chart of its current state in a gif format | [Chart Operations](/en/bridge/functions/mql4/chart_operations) |
| [ChartSetDouble](/en/bridge/functions/mql4/chart_operations/chartsetdouble) | Sets the double value for a corresponding property of the specified chart | [Chart Operations](/en/bridge/functions/mql4/chart_operations) |
| [ChartSetInteger](/en/bridge/functions/mql4/chart_operations/chartsetinteger) | Sets the integer value (datetime, int, color, bool or char) for a corresponding property of the specified chart | [Chart Operations](/en/bridge/functions/mql4/chart_operations) |
| [ChartSetString](/en/bridge/functions/mql4/chart_operations/chartsetstring) | Sets the string value for a corresponding property of the specified chart | [Chart Operations](/en/bridge/functions/mql4/chart_operations) |
| [ChartSetSymbolPeriod](/en/bridge/functions/mql4/chart_operations/chartsetsymbolperiod) | Changes the symbol value and a period of the specified chart | [Chart Operations](/en/bridge/functions/mql4/chart_operations) |
| [ChartSymbol](/en/bridge/functions/mql4/chart_operations/chartsymbol) | Returns the symbol name of the specified chart | [Chart Operations](/en/bridge/functions/mql4/chart_operations) |
| [ChartTimeOnDropped](/en/bridge/functions/mql4/chart_operations/charttimeondropped) | Returns the time coordinate of the chart point, the Expert Advisor or script has been dropped to | [Chart Operations](/en/bridge/functions/mql4/chart_operations) |
| [ChartTimePriceToXY](/en/bridge/functions/mql4/chart_operations/charttimepricetoxy) | Converts the coordinates of a chart from the time/price representation to the X and Y coordinates | [Chart Operations](/en/bridge/functions/mql4/chart_operations) |
| [ChartWindowFind](/en/bridge/functions/mql4/chart_operations/chartwindowfind) | Returns the number of a subwindow where an indicator is drawn | [Chart Operations](/en/bridge/functions/mql4/chart_operations) |
| [ChartWindowOnDropped](/en/bridge/functions/mql4/chart_operations/chartwindowondropped) | Returns the number (index) of the chart subwindow, the Expert Advisor or script has been dropped to | [Chart Operations](/en/bridge/functions/mql4/chart_operations) |
| [ChartXOnDropped](/en/bridge/functions/mql4/chart_operations/chartxondropped) | Returns the X coordinate of the chart point, the Expert Advisor or script has been dropped to | [Chart Operations](/en/bridge/functions/mql4/chart_operations) |
| [ChartXYToTimePrice](/en/bridge/functions/mql4/chart_operations/chartxytotimeprice) | Converts the X and Y coordinates on a chart to the time and price values | [Chart Operations](/en/bridge/functions/mql4/chart_operations) |
| [ChartYOnDropped](/en/bridge/functions/mql4/chart_operations/chartyondropped) | Returns the Y coordinate of the chart point, the Expert Advisor or script has been dropped to | [Chart Operations](/en/bridge/functions/mql4/chart_operations) |
| [CheckPointer](/en/bridge/functions/mql4/common/checkpointer) | Returns the type of the object pointer | [Common Functions](/en/bridge/functions/mql4/common) |
| [ColorToARGB](/en/bridge/functions/mql4/convert/colortoargb) | Converting color type to uint type to receive ARGB representation of the color. | [Conversion Functions](/en/bridge/functions/mql4/convert) |
| [ColorToString](/en/bridge/functions/mql4/convert/colortostring) | Converting color value into string as "R,G,B" | [Conversion Functions](/en/bridge/functions/mql4/convert) |
| [Comment](/en/bridge/functions/mql4/common/comment) | Outputs a comment in the left top corner of the chart | [Common Functions](/en/bridge/functions/mql4/common) |
| [CopyClose](/en/bridge/functions/mql4/series/copyclose) | Gets history data on bar closing price for a specified symbol and period into an array | [Timeseries and Indicators Access](/en/bridge/functions/mql4/series) |
| [CopyHigh](/en/bridge/functions/mql4/series/copyhigh) | Gets history data on maximal bar price for a specified symbol and period into an array | [Timeseries and Indicators Access](/en/bridge/functions/mql4/series) |
| [CopyLow](/en/bridge/functions/mql4/series/copylow) | Gets history data on minimal bar price for a specified symbol and period into an array | [Timeseries and Indicators Access](/en/bridge/functions/mql4/series) |
| [CopyOpen](/en/bridge/functions/mql4/series/copyopen) | Gets history data on bar opening price for a specified symbol and period into an array | [Timeseries and Indicators Access](/en/bridge/functions/mql4/series) |
| [CopyRates](/en/bridge/functions/mql4/series/copyrates) | Gets history data of the [Rates](/en/bridge/functions/mql4/constants/structures/mqlrates) structure for a specified symbol and period into an array | [Timeseries and Indicators Access](/en/bridge/functions/mql4/series) |
| [CopyTickVolume](/en/bridge/functions/mql4/series/copytickvolume) | Gets history data on tick volumes for a specified symbol and period into an array | [Timeseries and Indicators Access](/en/bridge/functions/mql4/series) |
| [CopyTime](/en/bridge/functions/mql4/series/copytime) | Gets history data on bar opening time for a specified symbol and period into an array | [Timeseries and Indicators Access](/en/bridge/functions/mql4/series) |
| [cos](/en/bridge/functions/mql4/math/mathcos) | Returns the cosine of a number | [Math Functions](/en/bridge/functions/mql4/math) |
| [CryptDecode](/en/bridge/functions/mql4/common/cryptdecode) | Performs the inverse transformation of the data from array | [Common Functions](/en/bridge/functions/mql4/common) |
| [CryptEncode](/en/bridge/functions/mql4/common/cryptencode) | Transforms the data from array with the specified method | [Common Functions](/en/bridge/functions/mql4/common) |
| [Day](/en/bridge/functions/mql4/dateandtime/day) | Returns the current day of the month, i.e., the day of month of the last known server time | [Date and Time](/en/bridge/functions/mql4/dateandtime) |
| [DayOfWeek](/en/bridge/functions/mql4/dateandtime/dayofweek) | Returns the current zero-based day of the week of the last known server time | [Date and Time](/en/bridge/functions/mql4/dateandtime) |
| [DayOfYear](/en/bridge/functions/mql4/dateandtime/dayofyear) | Returns the current day of the year i.e., the day of year of the last known server time | [Date and Time](/en/bridge/functions/mql4/dateandtime) |
| [DebugBreak](/en/bridge/functions/mql4/common/debugbreak) | Program breakpoint in debugging | [Common Functions](/en/bridge/functions/mql4/common) |
| [Digits](/en/bridge/functions/mql4/check/digits) | Returns the number of decimal digits determining the accuracy of the price value of the current chart symbol | [Checkup](/en/bridge/functions/mql4/check) |
| [DoubleToStr](/en/bridge/functions/mql4/convert/doubletostr) | Returns text string with the specified numerical value converted into a specified precision format | [Conversion Functions](/en/bridge/functions/mql4/convert) |
| [DoubleToString](/en/bridge/functions/mql4/convert/doubletostring) | Converting a numeric value to a text line with a specified accuracy | [Conversion Functions](/en/bridge/functions/mql4/convert) |
| [EnumToString](/en/bridge/functions/mql4/convert/enumtostring) | Converting an enumeration value of any type to string | [Conversion Functions](/en/bridge/functions/mql4/convert) |
| [EventChartCustom](/en/bridge/functions/mql4/eventfunctions/eventchartcustom) | Generates a custom event for the specified chart | [Working with Events](/en/bridge/functions/mql4/eventfunctions) |
| [EventKillTimer](/en/bridge/functions/mql4/eventfunctions/eventkilltimer) | Stops the generation of events by the timer in the current chart | [Working with Events](/en/bridge/functions/mql4/eventfunctions) |
| [EventSetMillisecondTimer](/en/bridge/functions/mql4/eventfunctions/eventsetmillisecondtimer) | Launches event generator of the high-resolution timer with a period less than 1 second for the current chart | [Working with Events](/en/bridge/functions/mql4/eventfunctions) |
| [EventSetTimer](/en/bridge/functions/mql4/eventfunctions/eventsettimer) | Starts the timer event generator with the specified periodicity for the current chart | [Working with Events](/en/bridge/functions/mql4/eventfunctions) |
| [exp](/en/bridge/functions/mql4/math/mathexp) | Returns exponent of a number | [Math Functions](/en/bridge/functions/mql4/math) |
| [ExpertRemove](/en/bridge/functions/mql4/common/expertremove) | Stops Expert Advisor and unloads it from the chart | [Common Functions](/en/bridge/functions/mql4/common) |
| [fabs](/en/bridge/functions/mql4/math/mathabs) | Returns absolute value (modulus) of the specified numeric value | [Math Functions](/en/bridge/functions/mql4/math) |
| [FileClose](/en/bridge/functions/mql4/files/fileclose) | Closes a previously opened file | [File Functions](/en/bridge/functions/mql4/files) |
| [FileCopy](/en/bridge/functions/mql4/files/filecopy) | Copies the original file from a local or shared folder to another file | [File Functions](/en/bridge/functions/mql4/files) |
| [FileDelete](/en/bridge/functions/mql4/files/filedelete) | Deletes a specified file | [File Functions](/en/bridge/functions/mql4/files) |
| [FileFindClose](/en/bridge/functions/mql4/files/filefindclose) | Closes search handle | [File Functions](/en/bridge/functions/mql4/files) |
| [FileFindFirst](/en/bridge/functions/mql4/files/filefindfirst) | Starts the search of files in a directory in accordance with the specified filter | [File Functions](/en/bridge/functions/mql4/files) |
| [FileFindNext](/en/bridge/functions/mql4/files/filefindnext) | Continues the search started by the FileFindFirst() function | [File Functions](/en/bridge/functions/mql4/files) |
| [FileFlush](/en/bridge/functions/mql4/files/fileflush) | Writes to a disk all data remaining in the input/output file buffer | [File Functions](/en/bridge/functions/mql4/files) |
| [FileGetInteger](/en/bridge/functions/mql4/files/filegetinteger) | Gets an integer property of a file | [File Functions](/en/bridge/functions/mql4/files) |
| [FileIsEnding](/en/bridge/functions/mql4/files/fileisending) | Defines the end of a file in the process of reading | [File Functions](/en/bridge/functions/mql4/files) |
| [FileIsExist](/en/bridge/functions/mql4/files/fileisexist) | Checks the existence of a file | [File Functions](/en/bridge/functions/mql4/files) |
| [FileIsLineEnding](/en/bridge/functions/mql4/files/fileislineending) | Defines the end of a line in a text file in the process of reading | [File Functions](/en/bridge/functions/mql4/files) |
| [FileMove](/en/bridge/functions/mql4/files/filemove) | Moves or renames a file | [File Functions](/en/bridge/functions/mql4/files) |
| [FileOpen](/en/bridge/functions/mql4/files/fileopen) | Opens a file with a specified name and flag | [File Functions](/en/bridge/functions/mql4/files) |
| [FileOpenHistory](/en/bridge/functions/mql4/files/fileopenhistory) | Opens file in the current history directory or in its subfolders | [File Functions](/en/bridge/functions/mql4/files) |
| [FileReadArray](/en/bridge/functions/mql4/files/filereadarray) | Reads arrays of any type except for string from the file of the BIN type | [File Functions](/en/bridge/functions/mql4/files) |
| [FileReadBool](/en/bridge/functions/mql4/files/filereadbool) | Reads from the file of the CSV type a string from the current position till a delimiter (or till the end of a text line) and converts the read string to a value of bool type | [File Functions](/en/bridge/functions/mql4/files) |
| [FileReadDatetime](/en/bridge/functions/mql4/files/filereaddatetime) | Reads from the file of the CSV type a string of one of the formats: "YYYY.MM.DD HH:MM:SS", "YYYY.MM.DD" or "HH:MM:SS" - and converts it into a datetime value | [File Functions](/en/bridge/functions/mql4/files) |
| [FileReadDouble](/en/bridge/functions/mql4/files/filereaddouble) | Reads a double value from the current position of the file pointer | [File Functions](/en/bridge/functions/mql4/files) |
| [FileReadFloat](/en/bridge/functions/mql4/files/filereadfloat) | Reads a float value from the current position of the file pointer | [File Functions](/en/bridge/functions/mql4/files) |
| [FileReadInteger](/en/bridge/functions/mql4/files/filereadinteger) | Reads int, short or char value from the current position of the file pointer | [File Functions](/en/bridge/functions/mql4/files) |
| [FileReadLong](/en/bridge/functions/mql4/files/filereadlong) | Reads a long type value from the current position of the file pointer | [File Functions](/en/bridge/functions/mql4/files) |
| [FileReadNumber](/en/bridge/functions/mql4/files/filereadnumber) | Reads from the file of the CSV type a string from the current position till a delimiter (or til the end of a text line) and converts the read string into double value | [File Functions](/en/bridge/functions/mql4/files) |
| [FileReadString](/en/bridge/functions/mql4/files/filereadstring) | Reads a string from the current position of a file pointer from a file | [File Functions](/en/bridge/functions/mql4/files) |
| [FileReadStruct](/en/bridge/functions/mql4/files/filereadstruct) | Reads the contents from a binary file  into a structure passed as a parameter, from the current position of the file pointer | [File Functions](/en/bridge/functions/mql4/files) |
| [FileSeek](/en/bridge/functions/mql4/files/fileseek) | Moves the position of the file pointer by a specified number of bytes relative to the specified position | [File Functions](/en/bridge/functions/mql4/files) |
| [FileSize](/en/bridge/functions/mql4/files/filesize) | Returns the size of a corresponding open file | [File Functions](/en/bridge/functions/mql4/files) |
| [FileTell](/en/bridge/functions/mql4/files/filetell) | Returns the current position of the file pointer of a corresponding open file | [File Functions](/en/bridge/functions/mql4/files) |
| [FileWrite](/en/bridge/functions/mql4/files/filewrite) | Writes data to a file of CSV or TXT type | [File Functions](/en/bridge/functions/mql4/files) |
| [FileWriteArray](/en/bridge/functions/mql4/files/filewritearray) | Writes arrays of any type except for string into a file of BIN type | [File Functions](/en/bridge/functions/mql4/files) |
| [FileWriteDouble](/en/bridge/functions/mql4/files/filewritedouble) | Writes value of the double type from the current position of a file pointer into a binary file | [File Functions](/en/bridge/functions/mql4/files) |
| [FileWriteFloat](/en/bridge/functions/mql4/files/filewritefloat) | Writes value of the float type from the current position of a file pointer into a binary file | [File Functions](/en/bridge/functions/mql4/files) |
| [FileWriteInteger](/en/bridge/functions/mql4/files/filewriteinteger) | Writes value of the int type from the current position of a file pointer into a binary file | [File Functions](/en/bridge/functions/mql4/files) |
| [FileWriteLong](/en/bridge/functions/mql4/files/filewritelong) | Writes value of the long type from the current position of a file pointer into a binary file | [File Functions](/en/bridge/functions/mql4/files) |
| [FileWriteString](/en/bridge/functions/mql4/files/filewritestring) | Writes the value of a string parameter into a BIN or TXT file starting from the current position of the file pointer | [File Functions](/en/bridge/functions/mql4/files) |
| [FileWriteStruct](/en/bridge/functions/mql4/files/filewritestruct) | Writes the contents of a structure passed as a parameter into a binary file, starting from the current position of the file pointer | [File Functions](/en/bridge/functions/mql4/files) |
| [floor](/en/bridge/functions/mql4/math/mathfloor) | Returns integer numeric value closest from below | [Math Functions](/en/bridge/functions/mql4/math) |
| [fmax](/en/bridge/functions/mql4/math/mathmax) | Returns the maximal value of the two numeric values | [Math Functions](/en/bridge/functions/mql4/math) |
| [fmin](/en/bridge/functions/mql4/math/mathmin) | Returns the minimal value of the two numeric values | [Math Functions](/en/bridge/functions/mql4/math) |
| [fmod](/en/bridge/functions/mql4/math/mathmod) | Returns the real remainder after the division of two numbers | [Math Functions](/en/bridge/functions/mql4/math) |
| [FolderClean](/en/bridge/functions/mql4/files/folderclean) | Deletes all files in the specified folder | [File Functions](/en/bridge/functions/mql4/files) |
| [FolderCreate](/en/bridge/functions/mql4/files/foldercreate) | Creates a folder in the Files directory | [File Functions](/en/bridge/functions/mql4/files) |
| [FolderDelete](/en/bridge/functions/mql4/files/folderdelete) | Removes a selected directory. If the folder is not empty, then it can't be removed | [File Functions](/en/bridge/functions/mql4/files) |
| [GetLastError](/en/bridge/functions/mql4/check/getlasterror) | Returns the last error | [Checkup](/en/bridge/functions/mql4/check) |
| [GetPointer](/en/bridge/functions/mql4/common/getpointer) | Returns the object [pointer](/en/bridge/functions/mql4/basis/types/object_pointers) | [Common Functions](/en/bridge/functions/mql4/common) |
| [GetTickCount](/en/bridge/functions/mql4/common/gettickcount) | Returns the number of milliseconds that have elapsed since the system was started | [Common Functions](/en/bridge/functions/mql4/common) |
| [GlobalVariableCheck](/en/bridge/functions/mql4/globals/globalvariablecheck) | Checks the existence of a global variable with the specified name | [Global Variables of the Terminal](/en/bridge/functions/mql4/globals) |
| [GlobalVariableDel](/en/bridge/functions/mql4/globals/globalvariabledel) | Deletes a global variable | [Global Variables of the Terminal](/en/bridge/functions/mql4/globals) |
| [GlobalVariableGet](/en/bridge/functions/mql4/globals/globalvariableget) | Returns the value of a global variable | [Global Variables of the Terminal](/en/bridge/functions/mql4/globals) |
| [GlobalVariableName](/en/bridge/functions/mql4/globals/globalvariablename) | Returns the name of a global variable by it's ordinal number in the list of global variables | [Global Variables of the Terminal](/en/bridge/functions/mql4/globals) |
| [GlobalVariablesDeleteAll](/en/bridge/functions/mql4/globals/globalvariablesdeleteall) | Deletes global variables with the specified prefix in their names | [Global Variables of the Terminal](/en/bridge/functions/mql4/globals) |
| [GlobalVariableSet](/en/bridge/functions/mql4/globals/globalvariableset) | Sets the new value to a global variable | [Global Variables of the Terminal](/en/bridge/functions/mql4/globals) |
| [GlobalVariableSetOnCondition](/en/bridge/functions/mql4/globals/globalvariablesetoncondition) | Sets the new value of the existing global variable by condition | [Global Variables of the Terminal](/en/bridge/functions/mql4/globals) |
| [GlobalVariablesFlush](/en/bridge/functions/mql4/globals/globalvariablesflush) | Forcibly saves contents of all global variables to a disk | [Global Variables of the Terminal](/en/bridge/functions/mql4/globals) |
| [GlobalVariablesTotal](/en/bridge/functions/mql4/globals/globalvariablestotal) | Returns the total number of global variables | [Global Variables of the Terminal](/en/bridge/functions/mql4/globals) |
| [GlobalVariableTemp](/en/bridge/functions/mql4/globals/globalvariabletemp) | Sets the new value to a global variable, that exists only in the current session of the terminal | [Global Variables of the Terminal](/en/bridge/functions/mql4/globals) |
| [GlobalVariableTime](/en/bridge/functions/mql4/globals/globalvariabletime) | Returns time of the last accessing the global variable | [Global Variables of the Terminal](/en/bridge/functions/mql4/globals) |
| [HideTestIndicators](/en/bridge/functions/mql4/customind/hidetestindicators) | The function sets a flag hiding indicators called by the Expert Advisor | [Custom Indicators](/en/bridge/functions/mql4/customind) |
| [Hour](/en/bridge/functions/mql4/dateandtime/hour) | Returns the hour of the last known server time by the moment of the program start | [Date and Time](/en/bridge/functions/mql4/dateandtime) |
| [iAC](/en/bridge/functions/mql4/indicators/iac) | Accelerator Oscillator | [Technical Indicators](/en/bridge/functions/mql4/indicators) |
| [iAD](/en/bridge/functions/mql4/indicators/iad) | Accumulation/Distribution | [Technical Indicators](/en/bridge/functions/mql4/indicators) |
| [iADX](/en/bridge/functions/mql4/indicators/iadx) | Average Directional Index | [Technical Indicators](/en/bridge/functions/mql4/indicators) |
| [iAlligator](/en/bridge/functions/mql4/indicators/ialligator) | Alligator | [Technical Indicators](/en/bridge/functions/mql4/indicators) |
| [iAO](/en/bridge/functions/mql4/indicators/iao) | Awesome Oscillator | [Technical Indicators](/en/bridge/functions/mql4/indicators) |
| [iATR](/en/bridge/functions/mql4/indicators/iatr) | Average True Range | [Technical Indicators](/en/bridge/functions/mql4/indicators) |
| [iBands](/en/bridge/functions/mql4/indicators/ibands) | Bollinger Bands® | [Technical Indicators](/en/bridge/functions/mql4/indicators) |
| [iBandsOnArray](/en/bridge/functions/mql4/indicators/ibandsonarray) | Calculation of Bollinger Bands® indicator on data, stored in a numeric array | [Technical Indicators](/en/bridge/functions/mql4/indicators) |
| [iBars](/en/bridge/functions/mql4/series/ibars) | Returns the number of bars on the specified chart | [Timeseries and Indicators Access](/en/bridge/functions/mql4/series) |
| [iBarShift](/en/bridge/functions/mql4/series/ibarshift) | Returns the index of the bar which covers the specified time | [Timeseries and Indicators Access](/en/bridge/functions/mql4/series) |
| [iBearsPower](/en/bridge/functions/mql4/indicators/ibearspower) | Bears Power | [Technical Indicators](/en/bridge/functions/mql4/indicators) |
| [iBullsPower](/en/bridge/functions/mql4/indicators/ibullspower) | Bulls Power | [Technical Indicators](/en/bridge/functions/mql4/indicators) |
| [iBWMFI](/en/bridge/functions/mql4/indicators/ibwmfi) | Market Facilitation Index by Bill Williams | [Technical Indicators](/en/bridge/functions/mql4/indicators) |
| [iCCI](/en/bridge/functions/mql4/indicators/icci) | Commodity Channel Index | [Technical Indicators](/en/bridge/functions/mql4/indicators) |
| [iCCIOnArray](/en/bridge/functions/mql4/indicators/iccionarray) | Calculation of Commodity Channel Index indicator on data, stored in a numeric array | [Technical Indicators](/en/bridge/functions/mql4/indicators) |
| [iClose](/en/bridge/functions/mql4/series/iclose) | Returns Close price value for the bar of specified symbol with timeframe and shift | [Timeseries and Indicators Access](/en/bridge/functions/mql4/series) |
| [iCustom](/en/bridge/functions/mql4/indicators/icustom) | Custom indicator | [Technical Indicators](/en/bridge/functions/mql4/indicators) |
| [iDeMarker](/en/bridge/functions/mql4/indicators/idemarker) | DeMarker | [Technical Indicators](/en/bridge/functions/mql4/indicators) |
| [iEnvelopes](/en/bridge/functions/mql4/indicators/ienvelopes) | Envelopes | [Technical Indicators](/en/bridge/functions/mql4/indicators) |
| [iEnvelopesOnArray](/en/bridge/functions/mql4/indicators/ienvelopesonarray) | Calculation of Envelopes indicator on data, stored in a numeric array | [Technical Indicators](/en/bridge/functions/mql4/indicators) |
| [iForce](/en/bridge/functions/mql4/indicators/iforce) | Force Index | [Technical Indicators](/en/bridge/functions/mql4/indicators) |
| [iFractals](/en/bridge/functions/mql4/indicators/ifractals) | Fractals | [Technical Indicators](/en/bridge/functions/mql4/indicators) |
| [iGator](/en/bridge/functions/mql4/indicators/igator) | Gator Oscillator | [Technical Indicators](/en/bridge/functions/mql4/indicators) |
| [iHigh](/en/bridge/functions/mql4/series/ihigh) | Returns High price value for the bar of specified symbol with timeframe and shift | [Timeseries and Indicators Access](/en/bridge/functions/mql4/series) |
| [iHighest](/en/bridge/functions/mql4/series/ihighest) | Returns the shift of the maximum value over a specific number of bars | [Timeseries and Indicators Access](/en/bridge/functions/mql4/series) |
| [iIchimoku](/en/bridge/functions/mql4/indicators/iichimoku) | Ichimoku Kinko Hyo | [Technical Indicators](/en/bridge/functions/mql4/indicators) |
| [iLow](/en/bridge/functions/mql4/series/ilow) | Returns Low price value for the bar of indicated symbol with timeframe and shift | [Timeseries and Indicators Access](/en/bridge/functions/mql4/series) |
| [iLowest](/en/bridge/functions/mql4/series/ilowest) | Returns the shift of the lowest value over a specific number of bars | [Timeseries and Indicators Access](/en/bridge/functions/mql4/series) |
| [iMA](/en/bridge/functions/mql4/indicators/ima) | Moving Average | [Technical Indicators](/en/bridge/functions/mql4/indicators) |
| [iMACD](/en/bridge/functions/mql4/indicators/imacd) | Moving Averages Convergence-Divergence | [Technical Indicators](/en/bridge/functions/mql4/indicators) |
| [iMAOnArray](/en/bridge/functions/mql4/indicators/imaonarray) | Calculation of Moving Average indicator on data, stored in a numeric array | [Technical Indicators](/en/bridge/functions/mql4/indicators) |
| [iMFI](/en/bridge/functions/mql4/indicators/imfi) | Money Flow Index | [Technical Indicators](/en/bridge/functions/mql4/indicators) |
| [iMomentum](/en/bridge/functions/mql4/indicators/imomentum) | Momentum | [Technical Indicators](/en/bridge/functions/mql4/indicators) |
| [iMomentumOnArray](/en/bridge/functions/mql4/indicators/imomentumonarray) | Calculation of Momentum indicator on data, stored in a numeric array | [Technical Indicators](/en/bridge/functions/mql4/indicators) |
| [IndicatorBuffers](/en/bridge/functions/mql4/customind/indicatorbuffers) | Allocates memory for buffers used for custom indicator calculations | [Custom Indicators](/en/bridge/functions/mql4/customind) |
| [IndicatorCounted](/en/bridge/functions/mql4/customind/indicatorcounted) | Returns the amount of bars not changed after the indicator had been launched last | [Custom Indicators](/en/bridge/functions/mql4/customind) |
| [IndicatorDigits](/en/bridge/functions/mql4/customind/indicatordigits) | Sets precision format to visualize indicator values | [Custom Indicators](/en/bridge/functions/mql4/customind) |
| [IndicatorSetDouble](/en/bridge/functions/mql4/customind/indicatorsetdouble) | Sets the value of an indicator property of the [double](/en/bridge/functions/mql4/basis/types/double) type | [Custom Indicators](/en/bridge/functions/mql4/customind) |
| [IndicatorSetInteger](/en/bridge/functions/mql4/customind/indicatorsetinteger) | Sets the value of an indicator property of the [int](/en/bridge/functions/mql4/basis/types/integer/integertypes) type | [Custom Indicators](/en/bridge/functions/mql4/customind) |
| [IndicatorSetString](/en/bridge/functions/mql4/customind/indicatorsetstring) | Sets the value of an indicator property of the [string](/en/bridge/functions/mql4/basis/types/stringconst) type | [Custom Indicators](/en/bridge/functions/mql4/customind) |
| [IndicatorShortName](/en/bridge/functions/mql4/customind/indicatorshortname) | Sets the "short" name of a custom indicator to be shown in the DataWindow and in the chart subwindow | [Custom Indicators](/en/bridge/functions/mql4/customind) |
| [IntegerToString](/en/bridge/functions/mql4/convert/integertostring) | Converting int into a string of preset length | [Conversion Functions](/en/bridge/functions/mql4/convert) |
| [iOBV](/en/bridge/functions/mql4/indicators/iobv) | On Balance Volume | [Technical Indicators](/en/bridge/functions/mql4/indicators) |
| [iOpen](/en/bridge/functions/mql4/series/iopen) | Returns Open price value for the bar of specified symbol with timeframe and shift | [Timeseries and Indicators Access](/en/bridge/functions/mql4/series) |
| [iOsMA](/en/bridge/functions/mql4/indicators/iosma) | Moving Average of Oscillator (MACD histogram) | [Technical Indicators](/en/bridge/functions/mql4/indicators) |
| [iRSI](/en/bridge/functions/mql4/indicators/irsi) | Relative Strength Index | [Technical Indicators](/en/bridge/functions/mql4/indicators) |
| [iRSIOnArray](/en/bridge/functions/mql4/indicators/irsionarray) | Calculation of Momentum indicator on data, stored in a numeric array | [Technical Indicators](/en/bridge/functions/mql4/indicators) |
| [iRVI](/en/bridge/functions/mql4/indicators/irvi) | Relative Vigor Index | [Technical Indicators](/en/bridge/functions/mql4/indicators) |
| [iSAR](/en/bridge/functions/mql4/indicators/isar) | Parabolic Stop And Reverse System | [Technical Indicators](/en/bridge/functions/mql4/indicators) |
| [IsConnected](/en/bridge/functions/mql4/check/isconnected) | Checks connection between client terminal and server | [Checkup](/en/bridge/functions/mql4/check) |
| [IsDemo](/en/bridge/functions/mql4/check/isdemo) | Checks if the Expert Advisor runs on a demo account | [Checkup](/en/bridge/functions/mql4/check) |
| [IsDllsAllowed](/en/bridge/functions/mql4/check/isdllsallowed) | Checks if the DLL function call is allowed for the Expert Advisor | [Checkup](/en/bridge/functions/mql4/check) |
| [IsExpertEnabled](/en/bridge/functions/mql4/check/isexpertenabled) | Checks if Expert Advisors are enabled for running | [Checkup](/en/bridge/functions/mql4/check) |
| [IsLibrariesAllowed](/en/bridge/functions/mql4/check/islibrariesallowed) | Checks if the Expert Advisor can call library function | [Checkup](/en/bridge/functions/mql4/check) |
| [IsOptimization](/en/bridge/functions/mql4/check/isoptimization) | Checks if Expert Advisor runs in the Strategy Tester optimization mode | [Checkup](/en/bridge/functions/mql4/check) |
| [IsStopped](/en/bridge/functions/mql4/check/isstopped) | Returns true, if an mql4 program has been commanded to stop its operation | [Checkup](/en/bridge/functions/mql4/check) |
| [iStdDev](/en/bridge/functions/mql4/indicators/istddev) | Standard Deviation | [Technical Indicators](/en/bridge/functions/mql4/indicators) |
| [iStdDevOnArray](/en/bridge/functions/mql4/indicators/istddevonarray) | Calculation of Standard Deviation indicator on data, stored in a numeric array | [Technical Indicators](/en/bridge/functions/mql4/indicators) |
| [IsTesting](/en/bridge/functions/mql4/check/istesting) | Checks if the Expert Advisor runs in the testing mode | [Checkup](/en/bridge/functions/mql4/check) |
| [iStochastic](/en/bridge/functions/mql4/indicators/istochastic) | Stochastic Oscillator | [Technical Indicators](/en/bridge/functions/mql4/indicators) |
| [IsTradeAllowed](/en/bridge/functions/mql4/check/istradeallowed) | Checks if the Expert Advisor is allowed to trade and trading context is not busy | [Checkup](/en/bridge/functions/mql4/check) |
| [IsTradeContextBusy](/en/bridge/functions/mql4/check/istradecontextbusy) | Returns the information about trade context | [Checkup](/en/bridge/functions/mql4/check) |
| [IsVisualMode](/en/bridge/functions/mql4/check/isvisualmode) | Checks if the Expert Advisor is tested in visual mode | [Checkup](/en/bridge/functions/mql4/check) |
| [iTime](/en/bridge/functions/mql4/series/itime) | Returns time value for the bar of specified symbol with timeframe and shift | [Timeseries and Indicators Access](/en/bridge/functions/mql4/series) |
| [iVolume](/en/bridge/functions/mql4/series/ivolume) | Returns Tick Volume value for the bar of specified symbol with timeframe and shift | [Timeseries and Indicators Access](/en/bridge/functions/mql4/series) |
| [iWPR](/en/bridge/functions/mql4/indicators/iwpr) | Williams' Percent Range | [Technical Indicators](/en/bridge/functions/mql4/indicators) |
| [log](/en/bridge/functions/mql4/math/mathlog) | Returns natural logarithm | [Math Functions](/en/bridge/functions/mql4/math) |
| [log10](/en/bridge/functions/mql4/math/mathlog10) | Returns the logarithm of a number by base 10 | [Math Functions](/en/bridge/functions/mql4/math) |
| [MarketInfo](/en/bridge/functions/mql4/marketinformation/marketinfo) | Returns various data about securities listed in the "Market Watch" window | [Market Info](/en/bridge/functions/mql4/marketinformation) |
| [MathAbs](/en/bridge/functions/mql4/math/mathabs) | Returns absolute value (modulus) of the specified numeric value | [Math Functions](/en/bridge/functions/mql4/math) |
| [MathArccos](/en/bridge/functions/mql4/math/matharccos) | Returns the arc cosine of x in radians | [Math Functions](/en/bridge/functions/mql4/math) |
| [MathArcsin](/en/bridge/functions/mql4/math/matharcsin) | Returns the arc sine of x in radians | [Math Functions](/en/bridge/functions/mql4/math) |
| [MathArctan](/en/bridge/functions/mql4/math/matharctan) | Returns the arc tangent of x in radians | [Math Functions](/en/bridge/functions/mql4/math) |
| [MathCeil](/en/bridge/functions/mql4/math/mathceil) | Returns integer numeric value closest from above | [Math Functions](/en/bridge/functions/mql4/math) |
| [MathCos](/en/bridge/functions/mql4/math/mathcos) | Returns the cosine of a number | [Math Functions](/en/bridge/functions/mql4/math) |
| [MathExp](/en/bridge/functions/mql4/math/mathexp) | Returns exponent of a number | [Math Functions](/en/bridge/functions/mql4/math) |
| [MathFloor](/en/bridge/functions/mql4/math/mathfloor) | Returns integer numeric value closest from below | [Math Functions](/en/bridge/functions/mql4/math) |
| [MathIsValidNumber](/en/bridge/functions/mql4/math/mathisvalidnumber) | Checks the correctness of a real number | [Math Functions](/en/bridge/functions/mql4/math) |
| [MathLog](/en/bridge/functions/mql4/math/mathlog) | Returns natural logarithm | [Math Functions](/en/bridge/functions/mql4/math) |
| [MathLog10](/en/bridge/functions/mql4/math/mathlog10) | Returns the logarithm of a number by base 10 | [Math Functions](/en/bridge/functions/mql4/math) |
| [MathMax](/en/bridge/functions/mql4/math/mathmax) | Returns the maximal value of the two numeric values | [Math Functions](/en/bridge/functions/mql4/math) |
| [MathMin](/en/bridge/functions/mql4/math/mathmin) | Returns the minimal value of the two numeric values | [Math Functions](/en/bridge/functions/mql4/math) |
| [MathMod](/en/bridge/functions/mql4/math/mathmod) | Returns the real remainder after the division of two numbers | [Math Functions](/en/bridge/functions/mql4/math) |
| [MathPow](/en/bridge/functions/mql4/math/mathpow) | Raises the base to the specified power | [Math Functions](/en/bridge/functions/mql4/math) |
| [MathRand](/en/bridge/functions/mql4/math/mathrand) | Returns a pseudorandom value within the range of 0 to 32767 | [Math Functions](/en/bridge/functions/mql4/math) |
| [MathRound](/en/bridge/functions/mql4/math/mathround) | Rounds of a value to the nearest integer | [Math Functions](/en/bridge/functions/mql4/math) |
| [MathSin](/en/bridge/functions/mql4/math/mathsin) | Returns the sine of a number | [Math Functions](/en/bridge/functions/mql4/math) |
| [MathSqrt](/en/bridge/functions/mql4/math/mathsqrt) | Returns a square root | [Math Functions](/en/bridge/functions/mql4/math) |
| [MathSrand](/en/bridge/functions/mql4/math/mathsrand) | Sets the starting point for generating a series of pseudorandom integers | [Math Functions](/en/bridge/functions/mql4/math) |
| [MathTan](/en/bridge/functions/mql4/math/mathtan) | Returns the tangent of a number | [Math Functions](/en/bridge/functions/mql4/math) |
| [MessageBox](/en/bridge/functions/mql4/common/messagebox) | Creates, displays a message box and manages it | [Common Functions](/en/bridge/functions/mql4/common) |
| [Minute](/en/bridge/functions/mql4/dateandtime/minute) | Returns the current minute of the last known server time by the moment of the program start | [Date and Time](/en/bridge/functions/mql4/dateandtime) |
| [Month](/en/bridge/functions/mql4/dateandtime/month) | Returns the current month as number, i.e., the number of month of the last known server time | [Date and Time](/en/bridge/functions/mql4/dateandtime) |
| [MQLInfoInteger](/en/bridge/functions/mql4/check/mqlinfointeger) | Returns an integer value of a corresponding property of a running mql4 program | [Checkup](/en/bridge/functions/mql4/check) |
| [MQLInfoString](/en/bridge/functions/mql4/check/mqlinfostring) | Returns a string value of a corresponding property of a running mql4 program | [Checkup](/en/bridge/functions/mql4/check) |
| [MQLSetInteger](/en/bridge/functions/mql4/check/mqlsetinteger) | Sets the value of the MQL_CODEPAGE property in an MQL4 program environment | [Checkup](/en/bridge/functions/mql4/check) |
| [NormalizeDouble](/en/bridge/functions/mql4/convert/normalizedouble) | Rounding of a floating point number to a specified accuracy | [Conversion Functions](/en/bridge/functions/mql4/convert) |
| [ObjectCreate](/en/bridge/functions/mql4/objects/objectcreate) | Creates an object of the specified type in a specified chart | [Object Functions](/en/bridge/functions/mql4/objects) |
| [ObjectDelete](/en/bridge/functions/mql4/objects/objectdelete) | Removes the object having the specified name | [Object Functions](/en/bridge/functions/mql4/objects) |
| [ObjectDescription](/en/bridge/functions/mql4/objects/objectdescription) | Returns the object description | [Object Functions](/en/bridge/functions/mql4/objects) |
| [ObjectFind](/en/bridge/functions/mql4/objects/objectfind) | Searches for an object having the specified name | [Object Functions](/en/bridge/functions/mql4/objects) |
| [ObjectGet](/en/bridge/functions/mql4/objects/objectget) | Returns the value of the specified object property | [Object Functions](/en/bridge/functions/mql4/objects) |
| [ObjectGetDouble](/en/bridge/functions/mql4/objects/objectgetdouble) | Returns the double value of the corresponding object property | [Object Functions](/en/bridge/functions/mql4/objects) |
| [ObjectGetFiboDescription](/en/bridge/functions/mql4/objects/objectgetfibodescription) | Returns the level description of a Fibonacci object | [Object Functions](/en/bridge/functions/mql4/objects) |
| [ObjectGetInteger](/en/bridge/functions/mql4/objects/objectgetinteger) | Returns the integer value of the corresponding object property | [Object Functions](/en/bridge/functions/mql4/objects) |
| [ObjectGetShiftByValue](/en/bridge/functions/mql4/objects/objectgetshiftbyvalue) | Calculates and returns bar index for the given price | [Object Functions](/en/bridge/functions/mql4/objects) |
| [ObjectGetString](/en/bridge/functions/mql4/objects/objectgetstring) | Returns the string value of the corresponding object property | [Object Functions](/en/bridge/functions/mql4/objects) |
| [ObjectGetTimeByValue](/en/bridge/functions/mql4/objects/objectgettimebyvalue) | Returns the time value for the specified object price value | [Object Functions](/en/bridge/functions/mql4/objects) |
| [ObjectGetValueByShift](/en/bridge/functions/mql4/objects/objectgetvaluebyshift) | Calculates and returns the price value for the specified bar | [Object Functions](/en/bridge/functions/mql4/objects) |
| [ObjectGetValueByTime](/en/bridge/functions/mql4/objects/objectgetvaluebytime) | Returns the price value of an object for the specified time | [Object Functions](/en/bridge/functions/mql4/objects) |
| [ObjectMove](/en/bridge/functions/mql4/objects/objectmove) | Changes the coordinates of the specified object anchor point | [Object Functions](/en/bridge/functions/mql4/objects) |
| [ObjectName](/en/bridge/functions/mql4/objects/objectname) | Returns the name of an object by its index in the objects list | [Object Functions](/en/bridge/functions/mql4/objects) |
| [ObjectsDeleteAll](/en/bridge/functions/mql4/objects/objectsdeleteall) | Removes all objects of the specified type from the specified chart subwindow | [Object Functions](/en/bridge/functions/mql4/objects) |
| [ObjectSet](/en/bridge/functions/mql4/objects/objectset) | Changes the value of the specified object property | [Object Functions](/en/bridge/functions/mql4/objects) |
| [ObjectSetDouble](/en/bridge/functions/mql4/objects/objectsetdouble) | Sets the value of the corresponding object property | [Object Functions](/en/bridge/functions/mql4/objects) |
| [ObjectSetFiboDescription](/en/bridge/functions/mql4/objects/objectsetfibodescription) | Sets a new description to a level of a Fibonacci object | [Object Functions](/en/bridge/functions/mql4/objects) |
| [ObjectSetInteger](/en/bridge/functions/mql4/objects/objectsetinteger) | Sets the value of the corresponding object property | [Object Functions](/en/bridge/functions/mql4/objects) |
| [ObjectSetString](/en/bridge/functions/mql4/objects/objectsetstring) | Sets the value of the corresponding object property | [Object Functions](/en/bridge/functions/mql4/objects) |
| [ObjectSetText](/en/bridge/functions/mql4/objects/objectsettext) | Changes the object description | [Object Functions](/en/bridge/functions/mql4/objects) |
| [ObjectsTotal](/en/bridge/functions/mql4/objects/objectstotal) | Returns the number of objects of the specified type | [Object Functions](/en/bridge/functions/mql4/objects) |
| [ObjectType](/en/bridge/functions/mql4/objects/objecttype) | Returns the object type | [Object Functions](/en/bridge/functions/mql4/objects) |
| [OrderClose](/en/bridge/functions/mql4/trading/orderclose) | Closes opened order | [Trade Functions](/en/bridge/functions/mql4/trading) |
| [OrderCloseBy](/en/bridge/functions/mql4/trading/ordercloseby) | Closes an opened order by another opposite opened order | [Trade Functions](/en/bridge/functions/mql4/trading) |
| [OrderClosePrice](/en/bridge/functions/mql4/trading/ordercloseprice) | Returns close price of the currently selected order | [Trade Functions](/en/bridge/functions/mql4/trading) |
| [OrderCloseTime](/en/bridge/functions/mql4/trading/orderclosetime) | Returns close time of the currently selected order | [Trade Functions](/en/bridge/functions/mql4/trading) |
| [OrderComment](/en/bridge/functions/mql4/trading/ordercomment) | Returns comment of the currently selected order | [Trade Functions](/en/bridge/functions/mql4/trading) |
| [OrderCommission](/en/bridge/functions/mql4/trading/ordercommission) | Returns calculated commission of the currently selected order | [Trade Functions](/en/bridge/functions/mql4/trading) |
| [OrderDelete](/en/bridge/functions/mql4/trading/orderdelete) | Deletes previously opened pending order | [Trade Functions](/en/bridge/functions/mql4/trading) |
| [OrderExpiration](/en/bridge/functions/mql4/trading/orderexpiration) | Returns expiration date of the selected pending order | [Trade Functions](/en/bridge/functions/mql4/trading) |
| [OrderLots](/en/bridge/functions/mql4/trading/orderlots) | Returns amount of lots of the selected order | [Trade Functions](/en/bridge/functions/mql4/trading) |
| [OrderMagicNumber](/en/bridge/functions/mql4/trading/ordermagicnumber) | Returns an identifying (magic) number of the currently selected order | [Trade Functions](/en/bridge/functions/mql4/trading) |
| [OrderModify](/en/bridge/functions/mql4/trading/ordermodify) | Modification of characteristics of the previously opened or pending orders | [Trade Functions](/en/bridge/functions/mql4/trading) |
| [OrderOpenPrice](/en/bridge/functions/mql4/trading/orderopenprice) | Returns open price of the currently selected order | [Trade Functions](/en/bridge/functions/mql4/trading) |
| [OrderOpenTime](/en/bridge/functions/mql4/trading/orderopentime) | Returns open time of the currently selected order | [Trade Functions](/en/bridge/functions/mql4/trading) |
| [OrderPrint](/en/bridge/functions/mql4/trading/orderprint) | Prints information about the selected order in the log | [Trade Functions](/en/bridge/functions/mql4/trading) |
| [OrderProfit](/en/bridge/functions/mql4/trading/orderprofit) | Returns profit of the currently selected order | [Trade Functions](/en/bridge/functions/mql4/trading) |
| [OrderSelect](/en/bridge/functions/mql4/trading/orderselect) | The function selects an order for further processing | [Trade Functions](/en/bridge/functions/mql4/trading) |
| [OrderSend](/en/bridge/functions/mql4/trading/ordersend) | The main function used to open an order or place a pending order | [Trade Functions](/en/bridge/functions/mql4/trading) |
| [OrdersHistoryTotal](/en/bridge/functions/mql4/trading/ordershistorytotal) | Returns the number of closed orders in the account history loaded into the terminal | [Trade Functions](/en/bridge/functions/mql4/trading) |
| [OrderStopLoss](/en/bridge/functions/mql4/trading/orderstoploss) | Returns stop loss value of the currently selected order | [Trade Functions](/en/bridge/functions/mql4/trading) |
| [OrdersTotal](/en/bridge/functions/mql4/trading/orderstotal) | Returns the number of market and pending orders | [Trade Functions](/en/bridge/functions/mql4/trading) |
| [OrderSwap](/en/bridge/functions/mql4/trading/orderswap) | Returns swap value of the currently selected order | [Trade Functions](/en/bridge/functions/mql4/trading) |
| [OrderSymbol](/en/bridge/functions/mql4/trading/ordersymbol) | Returns symbol name of the currently selected order | [Trade Functions](/en/bridge/functions/mql4/trading) |
| [OrderTakeProfit](/en/bridge/functions/mql4/trading/ordertakeprofit) | Returns take profit value of the currently selected order | [Trade Functions](/en/bridge/functions/mql4/trading) |
| [OrderTicket](/en/bridge/functions/mql4/trading/orderticket) | Returns ticket number of the currently selected order | [Trade Functions](/en/bridge/functions/mql4/trading) |
| [OrderType](/en/bridge/functions/mql4/trading/ordertype) | Returns order operation type of the currently selected order | [Trade Functions](/en/bridge/functions/mql4/trading) |
| [Period](/en/bridge/functions/mql4/check/period) | Returns the current chart timeframe | [Checkup](/en/bridge/functions/mql4/check) |
| [Period](/en/bridge/functions/mql4/chart_operations/periodwindow) | Returns timeframe of the current chart | [Chart Operations](/en/bridge/functions/mql4/chart_operations) |
| [PeriodSeconds](/en/bridge/functions/mql4/common/periodseconds) | Returns the number of seconds in the period | [Common Functions](/en/bridge/functions/mql4/common) |
| [PlaySound](/en/bridge/functions/mql4/common/playsound) | Plays a sound file | [Common Functions](/en/bridge/functions/mql4/common) |
| [Point](/en/bridge/functions/mql4/check/point) | Returns the point size of the current symbol in the quote currency | [Checkup](/en/bridge/functions/mql4/check) |
| [pow](/en/bridge/functions/mql4/math/mathpow) | Raises the base to the specified power | [Math Functions](/en/bridge/functions/mql4/math) |
| [Print](/en/bridge/functions/mql4/common/print) | Displays a message in the log | [Common Functions](/en/bridge/functions/mql4/common) |
| [PrintFormat](/en/bridge/functions/mql4/common/printformat) | Formats and prints the sets of symbols and values in a log file in accordance with a preset format | [Common Functions](/en/bridge/functions/mql4/common) |
| [rand](/en/bridge/functions/mql4/math/mathrand) | Returns a pseudorandom value within the range of 0 to 32767 | [Math Functions](/en/bridge/functions/mql4/math) |
| [RefreshRates](/en/bridge/functions/mql4/series/refreshrates) | Refreshing of data in pre-defined variables and series arrays | [Timeseries and Indicators Access](/en/bridge/functions/mql4/series) |
| [ResetLastError](/en/bridge/functions/mql4/common/resetlasterror) | Sets the value of a predetermined variable [_LastError](/en/bridge/functions/mql4/predefined/_lasterror) to zero | [Common Functions](/en/bridge/functions/mql4/common) |
| [ResourceCreate](/en/bridge/functions/mql4/common/resourcecreate) | Creates an image resource based on a data set | [Common Functions](/en/bridge/functions/mql4/common) |
| [ResourceFree](/en/bridge/functions/mql4/common/resourcefree) | Deletes [dynamically created resource](/en/bridge/functions/mql4/common/resourcecreate#dynamic_resourcecreate) (freeing the memory allocated for it) | [Common Functions](/en/bridge/functions/mql4/common) |
| [ResourceReadImage](/en/bridge/functions/mql4/common/resourcereadimage) | Reads data from the graphical resource [created by ResourceCreate() function](/en/bridge/functions/mql4/common/resourcecreate#dynamic_resourcecreate) or [saved in EX4 file during compilation](/en/bridge/functions/mql4/runtime/resources#resource_include) | [Common Functions](/en/bridge/functions/mql4/common) |
| [ResourceSave](/en/bridge/functions/mql4/common/resourcesave) | Saves a resource into the specified file | [Common Functions](/en/bridge/functions/mql4/common) |
| [round](/en/bridge/functions/mql4/math/mathround) | Rounds of a value to the nearest integer | [Math Functions](/en/bridge/functions/mql4/math) |
| [Seconds](/en/bridge/functions/mql4/dateandtime/seconds) | Returns the amount of seconds elapsed from the beginning of the current minute of the last known server time by the moment of the program start | [Date and Time](/en/bridge/functions/mql4/dateandtime) |
| [SendFTP](/en/bridge/functions/mql4/common/sendftp) | Sends a file at the address specified in the settings window of the "FTP" tab | [Common Functions](/en/bridge/functions/mql4/common) |
| [SendMail](/en/bridge/functions/mql4/common/sendmail) | Sends an email at the address specified in the settings window of the "Email" tab | [Common Functions](/en/bridge/functions/mql4/common) |
| [SendNotification](/en/bridge/functions/mql4/common/sendnotification) | Sends push notifications to mobile terminals, whose MetaQuotes ID are specified in the "Notifications" tab | [Common Functions](/en/bridge/functions/mql4/common) |
| [SeriesInfoInteger](/en/bridge/functions/mql4/series/seriesinfointeger) | Returns information about the state of historical data | [Timeseries and Indicators Access](/en/bridge/functions/mql4/series) |
| [SetIndexArrow](/en/bridge/functions/mql4/customind/setindexarrow) | Sets an arrow symbol for indicators line of the DRAW_ARROW type | [Custom Indicators](/en/bridge/functions/mql4/customind) |
| [SetIndexBuffer](/en/bridge/functions/mql4/customind/setindexbuffer) | Binds the specified indicator buffer with one-dimensional dynamic [array](/en/bridge/functions/mql4/basis/variables#array_define) of the [double](/en/bridge/functions/mql4/basis/types/double) type | [Custom Indicators](/en/bridge/functions/mql4/customind) |
| [SetIndexDrawBegin](/en/bridge/functions/mql4/customind/setindexdrawbegin) | Sets the bar number from which the drawing of the given indicator line must start | [Custom Indicators](/en/bridge/functions/mql4/customind) |
| [SetIndexEmptyValue](/en/bridge/functions/mql4/customind/setindexemptyvalue) | Sets drawing line empty value | [Custom Indicators](/en/bridge/functions/mql4/customind) |
| [SetIndexLabel](/en/bridge/functions/mql4/customind/setindexlabel) | Sets drawing line description for showing in the DataWindow and in the tooltip | [Custom Indicators](/en/bridge/functions/mql4/customind) |
| [SetIndexShift](/en/bridge/functions/mql4/customind/setindexshift) | Sets offset for the drawing line | [Custom Indicators](/en/bridge/functions/mql4/customind) |
| [SetIndexStyle](/en/bridge/functions/mql4/customind/setindexstyle) | Sets the new type, style, width and color for a given indicator line | [Custom Indicators](/en/bridge/functions/mql4/customind) |
| [SetLevelStyle](/en/bridge/functions/mql4/customind/setlevelstyle) | Sets a new style, width and color of horizontal levels of indicator to be output in a separate window | [Custom Indicators](/en/bridge/functions/mql4/customind) |
| [SetLevelValue](/en/bridge/functions/mql4/customind/setlevelvalue) | Sets a value for a given horizontal level of the indicator to be output in a separate window | [Custom Indicators](/en/bridge/functions/mql4/customind) |
| [ShortArrayToString](/en/bridge/functions/mql4/convert/shortarraytostring) | Copying array part into a string | [Conversion Functions](/en/bridge/functions/mql4/convert) |
| [ShortToString](/en/bridge/functions/mql4/convert/shorttostring) | Converting symbol code (unicode) into one-symbol string | [Conversion Functions](/en/bridge/functions/mql4/convert) |
| [SignalBaseGetDouble](/en/bridge/functions/mql4/signals/signalbasegetdouble) | Returns the value of double type property for selected signal | [Trade Signals](/en/bridge/functions/mql4/signals) |
| [SignalBaseGetInteger](/en/bridge/functions/mql4/signals/signalbasegetinteger) | Returns the value of integer type property for selected signal | [Trade Signals](/en/bridge/functions/mql4/signals) |
| [SignalBaseGetString](/en/bridge/functions/mql4/signals/signalbasegetstring) | Returns the value of string type property for selected signal | [Trade Signals](/en/bridge/functions/mql4/signals) |
| [SignalBaseSelect](/en/bridge/functions/mql4/signals/signalbaseselect) | Selects a signal from signals, available in terminal for further working with it | [Trade Signals](/en/bridge/functions/mql4/signals) |
| [SignalBaseTotal](/en/bridge/functions/mql4/signals/signalbasetotal) | Returns the total amount of signals, available in terminal | [Trade Signals](/en/bridge/functions/mql4/signals) |
| [SignalInfoGetDouble](/en/bridge/functions/mql4/signals/signalinfogetdouble) | Returns the value of double type property of signal copy settings | [Trade Signals](/en/bridge/functions/mql4/signals) |
| [SignalInfoGetInteger](/en/bridge/functions/mql4/signals/signalinfogetinteger) | Returns the value of integer type property of signal copy settings | [Trade Signals](/en/bridge/functions/mql4/signals) |
| [SignalInfoGetString](/en/bridge/functions/mql4/signals/signalinfogetstring) | Returns the value of string type property of signal copy settings | [Trade Signals](/en/bridge/functions/mql4/signals) |
| [SignalInfoSetDouble](/en/bridge/functions/mql4/signals/signalinfosetdouble) | Sets the value of double type property of signal copy settings | [Trade Signals](/en/bridge/functions/mql4/signals) |
| [SignalInfoSetInteger](/en/bridge/functions/mql4/signals/signalinfosetinteger) | Sets the value of integer type property of signal copy settings | [Trade Signals](/en/bridge/functions/mql4/signals) |
| [SignalSubscribe](/en/bridge/functions/mql4/signals/signalsubscribe) | Subscribes to the trading signal | [Trade Signals](/en/bridge/functions/mql4/signals) |
| [SignalUnsubscribe](/en/bridge/functions/mql4/signals/signalunsubscribe) | Cancels subscription | [Trade Signals](/en/bridge/functions/mql4/signals) |
| [sin](/en/bridge/functions/mql4/math/mathsin) | Returns the sine of a number | [Math Functions](/en/bridge/functions/mql4/math) |
| [Sleep](/en/bridge/functions/mql4/common/sleep) | Suspends execution of the current Expert Advisor or script within a specified interval | [Common Functions](/en/bridge/functions/mql4/common) |
| [sqrt](/en/bridge/functions/mql4/math/mathsqrt) | Returns a square root | [Math Functions](/en/bridge/functions/mql4/math) |
| [srand](/en/bridge/functions/mql4/math/mathsrand) | Sets the starting point for generating a series of pseudorandom integers | [Math Functions](/en/bridge/functions/mql4/math) |
| [StringAdd](/en/bridge/functions/mql4/strings/stringadd) | Adds a string to the end of another string | [String Functions](/en/bridge/functions/mql4/strings) |
| [StringBufferLen](/en/bridge/functions/mql4/strings/stringbufferlen) | Returns the size of buffer allocated for the string | [String Functions](/en/bridge/functions/mql4/strings) |
| [StringCompare](/en/bridge/functions/mql4/strings/stringcompare) | Compares two strings and returns 1 if the first string is greater than the second; 0 - if the strings are equal; -1 (minus 1) - if the first string is less than the second one | [String Functions](/en/bridge/functions/mql4/strings) |
| [StringConcatenate](/en/bridge/functions/mql4/strings/stringconcatenate) | Forms a string of parameters passed | [String Functions](/en/bridge/functions/mql4/strings) |
| [StringFill](/en/bridge/functions/mql4/strings/stringfill) | Fills out a specified string by selected symbols | [String Functions](/en/bridge/functions/mql4/strings) |
| [StringFind](/en/bridge/functions/mql4/strings/stringfind) | Search for a substring in a string | [String Functions](/en/bridge/functions/mql4/strings) |
| [StringFormat](/en/bridge/functions/mql4/convert/stringformat) | Converting number into string according to preset format | [Conversion Functions](/en/bridge/functions/mql4/convert) |
| [StringGetChar](/en/bridge/functions/mql4/strings/stringgetchar) | Returns character (code) from the specified position in the string | [String Functions](/en/bridge/functions/mql4/strings) |
| [StringGetCharacter](/en/bridge/functions/mql4/strings/stringgetcharacter) | Returns the value of a number located in the specified string position | [String Functions](/en/bridge/functions/mql4/strings) |
| [StringInit](/en/bridge/functions/mql4/strings/stringinit) | Initializes string by specified symbols and provides the specified string length | [String Functions](/en/bridge/functions/mql4/strings) |
| [StringLen](/en/bridge/functions/mql4/strings/stringlen) | Returns the number of symbols in a string | [String Functions](/en/bridge/functions/mql4/strings) |
| [StringReplace](/en/bridge/functions/mql4/strings/stringreplace) | Replaces all the found substrings of a string by a set sequence of symbols | [String Functions](/en/bridge/functions/mql4/strings) |
| [StringSetChar](/en/bridge/functions/mql4/strings/stringsetchar) | Returns the string copy with changed character in the specified position | [String Functions](/en/bridge/functions/mql4/strings) |
| [StringSetCharacter](/en/bridge/functions/mql4/strings/stringsetcharacter) | Returns true is a symbol is successfully inserted to the passed string. | [String Functions](/en/bridge/functions/mql4/strings) |
| [StringSplit](/en/bridge/functions/mql4/strings/stringsplit) | Gets substrings by a specified separator from the specified string, returns the number of substrings obtained | [String Functions](/en/bridge/functions/mql4/strings) |
| [StringSubstr](/en/bridge/functions/mql4/strings/stringsubstr) | Extracts a substring from a text string starting from a specified position | [String Functions](/en/bridge/functions/mql4/strings) |
| [StringToCharArray](/en/bridge/functions/mql4/convert/stringtochararray) | Symbol-wise copying a string converted from Unicode to ANSI, to a selected place of array of uchar type | [Conversion Functions](/en/bridge/functions/mql4/convert) |
| [StringToColor](/en/bridge/functions/mql4/convert/stringtocolor) | Converting "R,G,B" string or string with color name into color type value | [Conversion Functions](/en/bridge/functions/mql4/convert) |
| [StringToDouble](/en/bridge/functions/mql4/convert/stringtodouble) | Converting a string containing a symbol representation of number into number of double type | [Conversion Functions](/en/bridge/functions/mql4/convert) |
| [StringToInteger](/en/bridge/functions/mql4/convert/stringtointeger) | Converting a string containing a symbol representation of number into number of int type | [Conversion Functions](/en/bridge/functions/mql4/convert) |
| [StringToLower](/en/bridge/functions/mql4/strings/stringtolower) | Transforms all symbols of a selected string to lowercase by location | [String Functions](/en/bridge/functions/mql4/strings) |
| [StringToShortArray](/en/bridge/functions/mql4/convert/stringtoshortarray) | Symbol-wise copying a string to a selected part of array of ushort type | [Conversion Functions](/en/bridge/functions/mql4/convert) |
| [StringToTime](/en/bridge/functions/mql4/convert/stringtotime) | Converting a string containing time or date in "yyyy.mm.dd \[hh:mi\]" format into datetime type | [Conversion Functions](/en/bridge/functions/mql4/convert) |
| [StringToUpper](/en/bridge/functions/mql4/strings/stringtoupper) | Transforms all symbols of a selected string into capitals by location | [String Functions](/en/bridge/functions/mql4/strings) |
| [StringTrimLeft](/en/bridge/functions/mql4/strings/stringtrimleft) | Cuts line feed characters, spaces and tabs in the left part of the string | [String Functions](/en/bridge/functions/mql4/strings) |
| [StringTrimRight](/en/bridge/functions/mql4/strings/stringtrimright) | Cuts line feed characters, spaces and tabs in the right part of the string | [String Functions](/en/bridge/functions/mql4/strings) |
| [StrToDouble](/en/bridge/functions/mql4/convert/strtodouble) | Converts string representation of number to double type | [Conversion Functions](/en/bridge/functions/mql4/convert) |
| [StrToInteger](/en/bridge/functions/mql4/convert/strtointeger) | Converts string containing the value character representation into a value of the integer type | [Conversion Functions](/en/bridge/functions/mql4/convert) |
| [StrToTime](/en/bridge/functions/mql4/convert/strtotime) | Converts string in the format "yyyy.mm.dd hh:mi" to datetime type | [Conversion Functions](/en/bridge/functions/mql4/convert) |
| [StructToTime](/en/bridge/functions/mql4/dateandtime/structtotime) | Converts a variable of MqlDateTime structure type into a datetime value | [Date and Time](/en/bridge/functions/mql4/dateandtime) |
| [Symbol](/en/bridge/functions/mql4/check/symbol) | Returns the name of a symbol of the current chart | [Checkup](/en/bridge/functions/mql4/check) |
| [Symbol](/en/bridge/functions/mql4/chart_operations/symbolwindow) | Returns a text string with the name of the current financial instrument | [Chart Operations](/en/bridge/functions/mql4/chart_operations) |
| [SymbolInfoDouble](/en/bridge/functions/mql4/marketinformation/symbolinfodouble) | Returns the double value of the symbol for the corresponding property | [Market Info](/en/bridge/functions/mql4/marketinformation) |
| [SymbolInfoInteger](/en/bridge/functions/mql4/marketinformation/symbolinfointeger) | Returns a value of an integer type (long, datetime, int or bool) of a specified symbol for the corresponding property | [Market Info](/en/bridge/functions/mql4/marketinformation) |
| [SymbolInfoSessionQuote](/en/bridge/functions/mql4/marketinformation/symbolinfosessionquote) | Allows receiving time of beginning and end of the specified quoting sessions for a specified symbol and day of week. | [Market Info](/en/bridge/functions/mql4/marketinformation) |
| [SymbolInfoSessionTrade](/en/bridge/functions/mql4/marketinformation/symbolinfosessiontrade) | Allows receiving time of beginning and end of the specified trading sessions for a specified symbol and day of week. | [Market Info](/en/bridge/functions/mql4/marketinformation) |
| [SymbolInfoString](/en/bridge/functions/mql4/marketinformation/symbolinfostring) | Returns a value of the string type of a specified symbol for the corresponding property | [Market Info](/en/bridge/functions/mql4/marketinformation) |
| [SymbolInfoTick](/en/bridge/functions/mql4/marketinformation/symbolinfotick) | Returns the current prices for the specified symbol in a variable of the [MqlTick](/en/bridge/functions/mql4/constants/structures/mqltick) type | [Market Info](/en/bridge/functions/mql4/marketinformation) |
| [SymbolName](/en/bridge/functions/mql4/marketinformation/symbolname) | Returns the name of a specified symbol | [Market Info](/en/bridge/functions/mql4/marketinformation) |
| [SymbolSelect](/en/bridge/functions/mql4/marketinformation/symbolselect) | Selects a symbol in the Market Watch window or removes a symbol from the window | [Market Info](/en/bridge/functions/mql4/marketinformation) |
| [SymbolsTotal](/en/bridge/functions/mql4/marketinformation/symbolstotal) | Returns the number of available (selected in Market Watch or all) symbols | [Market Info](/en/bridge/functions/mql4/marketinformation) |
| [tan](/en/bridge/functions/mql4/math/mathtan) | Returns the tangent of a number | [Math Functions](/en/bridge/functions/mql4/math) |
| [TerminalClose](/en/bridge/functions/mql4/common/terminalclose) | Commands the terminal to complete operation | [Common Functions](/en/bridge/functions/mql4/common) |
| [TerminalCompany](/en/bridge/functions/mql4/check/terminalcompany) | Returns the name of company owning the client terminal | [Checkup](/en/bridge/functions/mql4/check) |
| [TerminalInfoDouble](/en/bridge/functions/mql4/check/terminalinfodouble) | Returns an double value of a corresponding property of a running mql4 program | [Checkup](/en/bridge/functions/mql4/check) |
| [TerminalInfoInteger](/en/bridge/functions/mql4/check/terminalinfointeger) | Returns an integer value of a corresponding property of a running mql4 program | [Checkup](/en/bridge/functions/mql4/check) |
| [TerminalInfoString](/en/bridge/functions/mql4/check/terminalinfostring) | Returns a string value of a corresponding property of a running mql4 program | [Checkup](/en/bridge/functions/mql4/check) |
| [TerminalName](/en/bridge/functions/mql4/check/terminalname) | Returns client terminal name | [Checkup](/en/bridge/functions/mql4/check) |
| [TerminalPath](/en/bridge/functions/mql4/check/terminalpath) | Returns the directory, from which the client terminal was launched | [Checkup](/en/bridge/functions/mql4/check) |
| [TesterStatistics](/en/bridge/functions/mql4/common/testerstatistics) | It returns the value of a specified statistic calculated based on testing results | [Common Functions](/en/bridge/functions/mql4/common) |
| [TextGetSize](/en/bridge/functions/mql4/objects/textgetsize) | Returns the string's width and height at the current [font settings](/en/bridge/functions/mql4/objects/textsetfont) | [Object Functions](/en/bridge/functions/mql4/objects) |
| [TextOut](/en/bridge/functions/mql4/objects/textout) | Transfers the text to the custom array (buffer) designed for creation of a graphical [resource](/en/bridge/functions/mql4/common/resourcecreate) | [Object Functions](/en/bridge/functions/mql4/objects) |
| [TextSetFont](/en/bridge/functions/mql4/objects/textsetfont) | Sets the font for displaying the text using drawing methods (Arial 20 used by default) | [Object Functions](/en/bridge/functions/mql4/objects) |
| [TimeCurrent](/en/bridge/functions/mql4/dateandtime/timecurrent) | Returns the last known server time (time of the last quote receipt) in the datetime format | [Date and Time](/en/bridge/functions/mql4/dateandtime) |
| [TimeDay](/en/bridge/functions/mql4/dateandtime/timeday) | Returns the day of month of the specified date | [Date and Time](/en/bridge/functions/mql4/dateandtime) |
| [TimeDaylightSavings](/en/bridge/functions/mql4/dateandtime/timedaylightsavings) | Returns the sign of Daylight Saving Time switch | [Date and Time](/en/bridge/functions/mql4/dateandtime) |
| [TimeDayOfWeek](/en/bridge/functions/mql4/dateandtime/timedayofweek) | Returns the zero-based day of week of the specified date | [Date and Time](/en/bridge/functions/mql4/dateandtime) |
| [TimeDayOfYear](/en/bridge/functions/mql4/dateandtime/timedayofyear) | Returns the day of year of the specified date | [Date and Time](/en/bridge/functions/mql4/dateandtime) |
| [TimeGMT](/en/bridge/functions/mql4/dateandtime/timegmt) | Returns GMT in datetime format with the Daylight Saving Time by local time of the computer, where the client terminal is running | [Date and Time](/en/bridge/functions/mql4/dateandtime) |
| [TimeGMTOffset](/en/bridge/functions/mql4/dateandtime/timegmtoffset) | Returns the current difference between GMT time and the local computer time in seconds, taking into account DST switch | [Date and Time](/en/bridge/functions/mql4/dateandtime) |
| [TimeHour](/en/bridge/functions/mql4/dateandtime/timehour) | Returns the hour of the specified time | [Date and Time](/en/bridge/functions/mql4/dateandtime) |
| [TimeLocal](/en/bridge/functions/mql4/dateandtime/timelocal) | Returns the local computer time in datetime format | [Date and Time](/en/bridge/functions/mql4/dateandtime) |
| [TimeMinute](/en/bridge/functions/mql4/dateandtime/timeminute) | Returns the minute of the specified time | [Date and Time](/en/bridge/functions/mql4/dateandtime) |
| [TimeMonth](/en/bridge/functions/mql4/dateandtime/timemonth) | Returns the month number of the specified time | [Date and Time](/en/bridge/functions/mql4/dateandtime) |
| [TimeSeconds](/en/bridge/functions/mql4/dateandtime/timeseconds) | Returns the amount of seconds elapsed from the beginning of the minute of the specified time | [Date and Time](/en/bridge/functions/mql4/dateandtime) |
| [TimeToStr](/en/bridge/functions/mql4/convert/timetostr) | Converts value of datetime type into a string of "yyyy.mm.dd hh:mi" format | [Conversion Functions](/en/bridge/functions/mql4/convert) |
| [TimeToString](/en/bridge/functions/mql4/convert/timetostring) | Converting a value containing time in seconds elapsed since 01.01.1970 into a string of "yyyy.mm.dd hh:mi" format | [Conversion Functions](/en/bridge/functions/mql4/convert) |
| [TimeToStruct](/en/bridge/functions/mql4/dateandtime/timetostruct) | Converts a datetime value into a variable of MqlDateTime structure type | [Date and Time](/en/bridge/functions/mql4/dateandtime) |
| [TimeYear](/en/bridge/functions/mql4/dateandtime/timeyear) | Returns year of the specified date | [Date and Time](/en/bridge/functions/mql4/dateandtime) |
| [UninitializeReason](/en/bridge/functions/mql4/check/uninitializereason) | Returns the code of the reason for deinitialization | [Checkup](/en/bridge/functions/mql4/check) |
| [WebRequest](/en/bridge/functions/mql4/common/webrequest) | Sends HTTP request to the specified server | [Common Functions](/en/bridge/functions/mql4/common) |
| [WindowBarsPerChart](/en/bridge/functions/mql4/chart_operations/windowbarsperchart) | Returns the amount of bars visible on the chart | [Chart Operations](/en/bridge/functions/mql4/chart_operations) |
| [WindowExpertName](/en/bridge/functions/mql4/chart_operations/windowexpertname) | Returns the name of the executed Expert Advisor, script, custom indicator, or library | [Chart Operations](/en/bridge/functions/mql4/chart_operations) |
| [WindowFind](/en/bridge/functions/mql4/chart_operations/windowfind) | Returns the window index containing this specified indicator | [Chart Operations](/en/bridge/functions/mql4/chart_operations) |
| [WindowFirstVisibleBar](/en/bridge/functions/mql4/chart_operations/windowfirstvisiblebar) | Returns index of the first visible bar in the current chart window | [Chart Operations](/en/bridge/functions/mql4/chart_operations) |
| [WindowHandle](/en/bridge/functions/mql4/chart_operations/windowhandle) | Returns the system handle of the chart window | [Chart Operations](/en/bridge/functions/mql4/chart_operations) |
| [WindowIsVisible](/en/bridge/functions/mql4/chart_operations/windowisvisible) | Returns the visibility flag of the chart subwindow | [Chart Operations](/en/bridge/functions/mql4/chart_operations) |
| [WindowOnDropped](/en/bridge/functions/mql4/chart_operations/windowondropped) | Returns the window index where Expert Advisor, custom indicator or script was dropped | [Chart Operations](/en/bridge/functions/mql4/chart_operations) |
| [WindowPriceMax](/en/bridge/functions/mql4/chart_operations/windowpricemax) | Returns the maximal value of the vertical scale of the specified subwindow of the current chart | [Chart Operations](/en/bridge/functions/mql4/chart_operations) |
| [WindowPriceMin](/en/bridge/functions/mql4/chart_operations/windowpricemin) | Returns the minimal value of the vertical scale of the specified subwindow of the current chart | [Chart Operations](/en/bridge/functions/mql4/chart_operations) |
| [WindowPriceOnDropped](/en/bridge/functions/mql4/chart_operations/windowpriceondropped) | Returns the price of the chart point where Expert Advisor or script was dropped | [Chart Operations](/en/bridge/functions/mql4/chart_operations) |
| [WindowRedraw](/en/bridge/functions/mql4/chart_operations/windowredraw) | Redraws the current chart forcedly | [Chart Operations](/en/bridge/functions/mql4/chart_operations) |
| [WindowScreenShot](/en/bridge/functions/mql4/chart_operations/windowscreenshot) | Saves current chart screen shot as a GIF, PNG or BMP file depending on specified extension | [Chart Operations](/en/bridge/functions/mql4/chart_operations) |
| [WindowsTotal](/en/bridge/functions/mql4/chart_operations/windowstotal) | Returns total number of indicator windows on the chart | [Chart Operations](/en/bridge/functions/mql4/chart_operations) |
| [WindowTimeOnDropped](/en/bridge/functions/mql4/chart_operations/windowtimeondropped) | Returns the time of the chart point where Expert Advisor or script was dropped | [Chart Operations](/en/bridge/functions/mql4/chart_operations) |
| [WindowXOnDropped](/en/bridge/functions/mql4/chart_operations/windowxondropped) | Returns the value at X axis in pixels for the chart window client area point at which the Expert Advisor or script was dropped | [Chart Operations](/en/bridge/functions/mql4/chart_operations) |
| [WindowYOnDropped](/en/bridge/functions/mql4/chart_operations/windowyondropped) | Returns the value at Y axis in pixels for the chart window client area point at which the Expert Advisor or script was dropped | [Chart Operations](/en/bridge/functions/mql4/chart_operations) |
| [Year](/en/bridge/functions/mql4/dateandtime/year) | Returns the current year, i.e., the year of the last known server time | [Date and Time](/en/bridge/functions/mql4/dateandtime) |
| [ZeroMemory](/en/bridge/functions/mql4/common/zeromemory) | Resets a variable passed to it by reference. The variable can be of any type, except for classes and structures that have constructors. | [Common Functions](/en/bridge/functions/mql4/common) |