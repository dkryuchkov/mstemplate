var Modeler = require("../Modeler.js");
var className = 'TypeSyncCustomerPartyAccountListEBMType';

var TypeSyncCustomerPartyAccountListEBMType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  EBMHeader: {
      type: "TypeEBMHeaderType",
      wsdlDefinition: {
        name: "WL5G3N2:EBMHeader",
        type: "EBMHeaderType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    DataArea: {
      type: "TypeSyncCustomerPartyAccountListDataAreaType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        name: "WL5G3N1:DataArea",
        type: "SyncCustomerPartyAccountListDataAreaType",
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    languageCode: {
      type: "TypeLanguageCodeType",
      wsdlDefinition: {
        name: "languageCode",
        type: "WL5G3N2:LanguageCodeType",
        attribute: true
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    versionID: {
      type: "TypeStringType",
      wsdlDefinition: {
        name: "versionID",
        type: "WL5G3N2:StringType",
        attribute: true
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	};
	
	if(parentObj === 'getWsdlDefinition')
	{
		return data;
	}
	
	// Class property definitions here:
	Modeler.extend(className, {
	  EBMHeader: {
      type: "TypeEBMHeaderType",
      wsdlDefinition: {
        name: "WL5G3N2:EBMHeader",
        type: "EBMHeaderType",
        attribute: false,
        ns: "WL5G3N2"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    DataArea: {
      type: "TypeSyncCustomerPartyAccountListDataAreaType",
      wsdlDefinition: {
        maxOccurs: "unbounded",
        name: "WL5G3N1:DataArea",
        type: "SyncCustomerPartyAccountListDataAreaType",
        attribute: false,
        ns: "WL5G3N1"
      },
      mask: Modeler.GET | Modeler.SET | Modeler.ARRAY,
      required: false
    },
    languageCode: {
      type: "TypeLanguageCodeType",
      wsdlDefinition: {
        name: "languageCode",
        type: "WL5G3N2:LanguageCodeType",
        attribute: true
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    versionID: {
      type: "TypeStringType",
      wsdlDefinition: {
        name: "versionID",
        type: "WL5G3N2:StringType",
        attribute: true
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeSyncCustomerPartyAccountListEBMType;
Modeler.register(TypeSyncCustomerPartyAccountListEBMType, "TypeSyncCustomerPartyAccountListEBMType");
