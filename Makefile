#
# Makefile for generating TypeScript interfaces from pagoPA WSDL files
#

WSDL_FILES = 	nodo/NodoPerPsp.wsdl \
							nodo/PspPerNodo.wsdl \
							avvisatura/NodoPerPSPChiediElencoAvvisiDigitali.wsdl \
							avvisatura/NodoPerPSPIscrizioniAvvisatura.wsdl \
							avvisatura/PSPPerNodoAvvisiDigitali.wsdl

WSDL_DIR ?= ./wsdl
OUTPUT_DIR ?= ./wsdl-lib
WSDL_TO_TS ?= ./node_modules/.bin/wsdl-to-ts

WSDL_FILES_PATHS = $(patsubst %, $(WSDL_DIR)/%, $(WSDL_FILES))

all: clean $(WSDL_FILES_PATHS)
	@$(MAKE) fix-types

$(WSDL_FILES_PATHS):
	@$(WSDL_TO_TS) --outdir=$(OUTPUT_DIR) $@

clean:
	@rm -rf $(OUTPUT_DIR)

TS_FILES := $(shell find $(OUTPUT_DIR) -type f)

TS_PREFIX =\
	// Aliases for types used in WSDLs\n\
	import { base64Binary, dateTime, date, gYear, int } from \"../../wsdl-types\";\n

$(TS_FILES):
	@sed -i '' 's/xsd://' $@
	@sed -i '' 's/\(e-mail.*\):/"\1":/' $@
	@echo "$(TS_PREFIX)\n$$(cat $@)" > $@

fix-types: $(TS_FILES)

.PHONY: all clean interfaces fix-types $(WSDL_FILES_PATHS) $(TS_FILES)
