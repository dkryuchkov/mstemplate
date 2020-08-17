var Modeler = require("../Modeler.js");
var className = 'TypeCodeType';

var TypeCodeType = function(json, parentObj) {
  parentObj = parentObj || this;
	
	const data = {
	  CodeType: {
      type: "string",
      wsdlDefinition: {
        name: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "A character string (letters, figures, or symbols) that for brevity and/or languange independence may be used to represent or replace a definitive value or text of an attribute together with relevant supplementary information"
        },
        "xsd:simpleContent": {
          "xsd:extension": {
            base: "xsd:normalizedString",
            "xsd:attribute": [
              {
                name: "listID",
                type: "xsd:normalizedString",
                use: "optional",
                attribute: true
              },
              {
                name: "listAgencyID",
                type: "xsd:normalizedString",
                use: "optional",
                attribute: true
              },
              {
                name: "listVersionID",
                type: "xsd:normalizedString",
                use: "optional",
                attribute: true
              }
            ]
          }
        },
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    listID: {
      type: "TypenormalizedString",
      wsdlDefinition: {
        name: "listID",
        type: "xsd:normalizedString",
        use: "optional",
        attribute: true
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    listAgencyID: {
      type: "TypenormalizedString",
      wsdlDefinition: {
        name: "listAgencyID",
        type: "xsd:normalizedString",
        use: "optional",
        attribute: true
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    listVersionID: {
      type: "TypenormalizedString",
      wsdlDefinition: {
        name: "listVersionID",
        type: "xsd:normalizedString",
        use: "optional",
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
	  CodeType: {
      type: "string",
      wsdlDefinition: {
        name: "CodeType",
        "xsd:annotation": {
          "xsd:documentation": "A character string (letters, figures, or symbols) that for brevity and/or languange independence may be used to represent or replace a definitive value or text of an attribute together with relevant supplementary information"
        },
        "xsd:simpleContent": {
          "xsd:extension": {
            base: "xsd:normalizedString",
            "xsd:attribute": [
              {
                name: "listID",
                type: "xsd:normalizedString",
                use: "optional",
                attribute: true
              },
              {
                name: "listAgencyID",
                type: "xsd:normalizedString",
                use: "optional",
                attribute: true
              },
              {
                name: "listVersionID",
                type: "xsd:normalizedString",
                use: "optional",
                attribute: true
              }
            ]
          }
        },
        attribute: false,
        type: "xsd:string"
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    listID: {
      type: "TypenormalizedString",
      wsdlDefinition: {
        name: "listID",
        type: "xsd:normalizedString",
        use: "optional",
        attribute: true
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    listAgencyID: {
      type: "TypenormalizedString",
      wsdlDefinition: {
        name: "listAgencyID",
        type: "xsd:normalizedString",
        use: "optional",
        attribute: true
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    },
    listVersionID: {
      type: "TypenormalizedString",
      wsdlDefinition: {
        name: "listVersionID",
        type: "xsd:normalizedString",
        use: "optional",
        attribute: true
      },
      mask: Modeler.GET | Modeler.SET,
      required: false
    }
	}, parentObj, json);
};

module.exports = TypeCodeType;
Modeler.register(TypeCodeType, "TypeCodeType");
