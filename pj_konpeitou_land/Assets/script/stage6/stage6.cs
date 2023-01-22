using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class stage6 : MonoBehaviour
{

    float time;
    bool is_incremet = true;

    public GameObject StageManager;

    public Text clicktext;

    // Start is called before the first frame update
    void Start()
    {
        time = 0.0f;
        is_incremet = true;
        clicktext.gameObject.SetActive(false);
        //audioSource = GetComponent<AudioSource>();

        
    }

    // Update is called once per frame
    void Update()
    {
        if (time > 3f)
        {
            is_incremet = false;
            clicktext.gameObject.SetActive(true);
        }


        if (is_incremet)
        {
            time += Time.deltaTime;
        }
        else if (!is_incremet)
        {
            if (Input.GetMouseButtonDown(0))
            {
                StageManager.GetComponent<StageManager>().on_stage_count = global::StageManager.StageCount.stage8;
                StageManager.GetComponent<StageManager>().stageObj[7].gameObject.SetActive(false);
                StageManager.GetComponent<StageManager>().stageObj[8].gameObject.SetActive(true);

                time = 0.0f;
                is_incremet = true;
                clicktext.gameObject.SetActive(false);

            }
        }
    }
}
